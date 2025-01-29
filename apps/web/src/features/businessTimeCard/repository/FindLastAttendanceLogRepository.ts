import { AttendanceState } from "@/core/domain/business/attend/AttendanceState";
import { FindLastAttendanceLogGateway } from "@/core/gateway/business/attend/FindLastAttendanceLogGateway";
import { YYYYmmDD } from "@/type/date/date";
import { GetAttendanceDocument } from "@v3/graphql/business/schema/query/v5/queryDailyAttendance.generated";

import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";

export class FindLastAttendanceLogRepository
  implements FindLastAttendanceLogGateway
{
  async findBy(now: YYYYmmDD) {
    const { id, group } = await findUser();

    const attendance = await execQuery(GetAttendanceDocument, {
      date: now,
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
        state: (lastLog?.state ?? "attend") as AttendanceState,
        startDatetime: attendance.data.day[0].startDatetime,
        endDatetime: attendance.data.day[0].endDatetime,
        breakSecond: attendance.data.day[0].breakSecond,
      };
    }

    return {
      dailyAttendanceId,
      datetime: now,
      state: "leave" as const,
      startDatetime: now.parseTZDateTime(),
      endDatetime: now.parseTZDateTime(),
      breakSecond: 0,
    };
  }
}
