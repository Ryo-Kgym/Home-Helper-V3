import { AttendanceState } from "../../../domain/business/attend/AttendanceState";

export type FindLastAttendanceLogGateway = {
  findBy: (_: Date) => Promise<{
    dailyAttendanceId: string | null;
    datetime: Date;
    state: AttendanceState;
    startDatetime: Date;
    endDatetime: Date;
    breakSecond: number;
  }>;
};
