import type { AttendanceState } from "../../../domain/business/attend/AttendanceState";

export type SaveAttendanceLogGateway = {
  save: (_: {
    date: Date;
    startDatetime: Date;
    endDatetime: Date | null;
    time: Date;
    type: AttendanceState;
    memo: string;
  }) => void;
};
