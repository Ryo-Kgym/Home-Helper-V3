import { YYYY_MM_DD } from "../../../types/yyyyMMdd";

export type DayAttendance = {
  date: YYYY_MM_DD;
  dayOfWeek: DayOfWeek;
  startTime: string | undefined;
  endTime: string | undefined;
  breakTime: string | undefined;
};

export type DayOfWeek = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
