"use server";

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

  const output = await usecase.handle({ date: TZDateTime.valueOf(now) });

  if (output.dailyAttendanceId) {
    await execMutation(UpdateDailyAttendanceDocument, {
      id: output.dailyAttendanceId,
      set: {
        endDatetime: output.endDatetime,
        breakSecond: output.breakSecond,
      },
    });
    await execMutation(InsertDailyAttendanceLogDocument, {
      object: {
        id: generateId(),
        dailyAttendanceId: output.dailyAttendanceId,
        state: output.nextState,
        datetime: TZDateTime.valueOf(now),
      },
    });
  } else {
    const dailyAttendanceId = generateId();
    await execMutation(InsertDailyAttendanceDocument, {
      object: {
        id: dailyAttendanceId,
        date: YYYYmmDD.valueOf(now),
        startDatetime: TZDateTime.valueOf(now),
        endDatetime: TZDateTime.valueOf(now),
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
        datetime: TZDateTime.valueOf(now),
      },
    });
  }

  return output;
};
