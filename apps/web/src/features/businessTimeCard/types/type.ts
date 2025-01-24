import { YYYY_MM_DD } from "../../../types/yyyyMMdd";

export type DayAttendance = {
  date: YYYY_MM_DD;
  dayOfWeek: DayOfWeek;
  startDatetime: Date | undefined;
  endDatetime: Date | undefined;
  breakSecond: number | undefined;
};

export type DayOfWeek = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
