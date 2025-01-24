"use server";

import { CalcAttendanceLogUsecase } from "@/core/usecase/business/attend/CalcAttendanceLogUsecase";
import {
  InsertDailyAttendanceDocument,
  InsertDailyAttendanceLogDocument,
  UpdateDailyAttendanceDocument,
} from "@v3/graphql/business/schema/mutate/v5/mutateDailyAttendance.generated";

import { convertToYmd } from "../../../function/date/convertToYmd";
import { generateId } from "../../../function/generateId";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execMutation } from "../../../persistence/database/server/execMutation";
import { FindLastAttendanceLogRepository } from "../repository/FindLastAttendanceLogRepository";

export const attendOrLeaveForWork = async (now: Date) => {
  const { id, group } = await findUser();

  const usecase = new CalcAttendanceLogUsecase(
    new FindLastAttendanceLogRepository(),
  );

  const output = await usecase.handle({ date: now });

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
        type: output.nextState,
        datetime: now,
      },
    });
  } else {
    const dailyAttendanceId = generateId();
    await execMutation(InsertDailyAttendanceDocument, {
      object: {
        id: dailyAttendanceId,
        date: convertToYmd(now) as unknown as Date,
        startDatetime: now,
        endDatetime: now,
        breakSecond: 0,
        userId: id,
        groupId: group.id,
      },
    });
    await execMutation(InsertDailyAttendanceLogDocument, {
      object: {
        id: generateId(),
        dailyAttendanceId,
        type: output.nextState,
        datetime: now,
      },
    });
  }

  return output;
};
