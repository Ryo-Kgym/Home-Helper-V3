import { TZDateTime, YYYYmmDD } from "@/type/date/date";

import { AttendanceState } from "../../../domain/business/attend/AttendanceState";

export type FindLastAttendanceLogGateway = {
  findBy: (_: YYYYmmDD) => Promise<{
    dailyAttendanceId: string | null;
    datetime: YYYYmmDD;
    state: AttendanceState;
    startDatetime: TZDateTime;
    endDatetime: TZDateTime;
    breakSecond: number;
  }>;
};
