import { YYYY_MM_DD, YYYY_MM_DD_HH_MM_SS } from "@/type/date/date";

export type Exact<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K];
};

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: string;
  date: YYYY_MM_DD;
  numeric: number;
  timestamp: YYYY_MM_DD_HH_MM_SS;
};

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;

export type BusinessDailyAttendanceLogInsertInput = {
  dailyAttendanceId: String;
  id: String;
  memo?: String;
  datetime: YYYY_MM_DD_HH_MM_SS;
  state: AttendanceState;
};

export type BusinessDailyAttendanceInsertInput = {
  dailyAttendanceLogs?: {
    data: BusinessDailyAttendanceLogInsertInput[];
  };
  date: YYYY_MM_DD;
  breakSecond: number;
  endDatetime: YYYY_MM_DD_HH_MM_SS;
  groupId: String;
  id: String;
  startDatetime: YYYY_MM_DD_HH_MM_SS;
  userId: String;
};

export type BusinessDailyAttendanceSetInput = {
  breakSecond: number;
  endDatetime: YYYY_MM_DD_HH_MM_SS;
  startDatetime?: YYYY_MM_DD_HH_MM_SS;
};

export type AttendanceState = "attend" | "leave";
