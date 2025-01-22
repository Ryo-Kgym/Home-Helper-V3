"use server";

import { AttendanceType } from "@v3/graphql/business/generated/typed";
import {
  InsertDailyAttendanceDocument,
  InsertDailyAttendanceLogDocument,
} from "@v3/graphql/business/schema/mutate/v5/mutateDailyAttendance.generated";
import { GetAttendanceDocument } from "@v3/graphql/business/schema/query/v5/queryDailyAttendance.generated";

import { convertToYmd } from "../../../function/date/convertToYmd";
import { generateId } from "../../../function/generateId";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execMutation } from "../../../persistence/database/server/execMutation";
import { execQuery } from "../../../persistence/database/server/execQuery";

export const attendAtWork = async (now: Date, type: AttendanceType) => {
  const { id, group } = await findUser();

  const date = convertToYmd(now) as unknown as Date;
  const attendance = await execQuery(GetAttendanceDocument, {
    date,
    userId: id,
    groupId: group.id,
  });

  const time = now.toTimeString().slice(0, 8);

  if (attendance.data.day[0]) {
    await execMutation(InsertDailyAttendanceLogDocument, {
      object: {
        id: generateId(),
        dailyAttendanceId: attendance.data.day[0].id,
        type,
        time,
      },
    });
    return;
  }

  const dailyAttendanceId = generateId();
  await execMutation(InsertDailyAttendanceDocument, {
    object: {
      id: dailyAttendanceId,
      date,
      startTime: time,
      endTime: time,
      userId: id,
      groupId: group.id,
    },
  });
  await execMutation(InsertDailyAttendanceLogDocument, {
    object: {
      id: generateId(),
      dailyAttendanceId,
      type,
      time,
    },
  });
};
