import { AttendanceState } from "@/core/domain/business/attend/AttendanceState";
import { TZDateTime, YYYYmmDD } from "@/type/date/date";

export type DayAttendance = {
  date: YYYYmmDD;
  dayOfWeek: DayOfWeek;
  startDatetime: TZDateTime | undefined;
  endDatetime: TZDateTime | undefined;
  breakSecond: number | undefined;
  workSecond: number | undefined;
};

type DayOfWeek = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

export type AttendanceLog = {
  id: string;
  state: AttendanceState;
  datetime: TZDateTime;
};
