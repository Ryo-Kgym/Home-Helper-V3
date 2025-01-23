import { AttendanceState } from "../../../domain/business/attend/AttendanceState";

export type FindLastAttendanceLogGateway = {
  findBy: (_: Date) => Promise<{
    datetime: Date;
    state: AttendanceState;
    startDatetime: Date;
    endDatetime: Date;
    breakSecond: number;
  }>;
};
