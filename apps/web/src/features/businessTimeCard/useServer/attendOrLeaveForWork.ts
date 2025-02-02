"use server";

import { convertToYmd } from "@/core/function/date/convertToYmd";
import { CalcAttendanceLogUsecase } from "@/core/usecase/business/attend/CalcAttendanceLogUsecase";
import { TZDateTime, YYYYmmDD } from "@/type/date/date";
import {
  InsertDailyAttendanceDocument,
  InsertDailyAttendanceLogDocument,
  UpdateDailyAttendanceDocument,
} from "@v3/graphql/business/schema/mutate/v5/mutateDailyAttendance.generated";

import { generateId } from "../../../function/generateId";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execMutation } from "../../../persistence/database/server/execMutation";
import { FindLastAttendanceLogRepository } from "../repository/FindLastAttendanceLogRepository";

export const attendOrLeaveForWork = async (now: Date) => {
  const { id, group } = await findUser();

  const usecase = new CalcAttendanceLogUsecase(
    new FindLastAttendanceLogRepository(),
  );

  const currentTZDateTime = TZDateTime.valueOf(now);

  const output = await usecase.handle({
    currentDate: new YYYYmmDD(convertToYmd(now)),
    datetime: currentTZDateTime,
  });

  if (output.dailyAttendanceId) {
    await execMutation(UpdateDailyAttendanceDocument, {
      id: output.dailyAttendanceId,
      set: {
        endDatetime: output.endDatetime.toString(),
        breakSecond: output.breakSecond,
      },
    });
    await execMutation(InsertDailyAttendanceLogDocument, {
      object: {
        id: generateId(),
        dailyAttendanceId: output.dailyAttendanceId,
        state: output.nextState,
        datetime: currentTZDateTime.toString(),
      },
    });
  } else {
    const dailyAttendanceId = generateId();
    await execMutation(InsertDailyAttendanceDocument, {
      object: {
        id: dailyAttendanceId,
        date: YYYYmmDD.valueOf(now).toString(),
        startDatetime: currentTZDateTime.toString(),
        endDatetime: currentTZDateTime.toString(),
        breakSecond: 0,
        userId: id,
        groupId: group.id,
      },
    });
    await execMutation(InsertDailyAttendanceLogDocument, {
      object: {
        id: generateId(),
        dailyAttendanceId,
        state: output.nextState,
        datetime: currentTZDateTime.toString(),
      },
    });
  }

  return {
    nextState: output.nextState,
  };
};
