import { AttendanceState } from "@/core/domain/business/attend/AttendanceState";
import { FindLastAttendanceLogGateway } from "@/core/gateway/business/attend/FindLastAttendanceLogGateway";
import { GetAttendanceDocument } from "@v3/graphql/business/schema/query/v5/queryDailyAttendance.generated";

import { convertToYmd } from "../../../function/date/convertToYmd";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";

export class FindLastAttendanceLogRepository
  implements FindLastAttendanceLogGateway
{
  async findBy(now: Date) {
    const { id, group } = await findUser();

    const attendance = await execQuery(GetAttendanceDocument, {
      date: convertToYmd(now) as unknown as Date,
      userId: id,
      groupId: group.id,
    });

    const dailyAttendanceId = attendance.data.day[0]?.id ?? null;

    if (attendance.data.day[0]) {
      const logs = attendance.data.day[0].logs ?? [];
      const lastLog = logs[logs.length - 1];

      return {
        dailyAttendanceId,
        datetime: now,
        state: (lastLog?.type ?? "attend") as AttendanceState,
        startDatetime: new Date(attendance.data.day[0].startDatetime),
        endDatetime: new Date(attendance.data.day[0].endDatetime),
        breakSecond: attendance.data.day[0].breakSecond,
      };
    }

    return {
      dailyAttendanceId,
      datetime: now,
      state: "leave" as const,
      startDatetime: now,
      endDatetime: now,
      breakSecond: 0,
    };
  }
}
