import { TZDateTime, YYYYmmDD } from "@/type/date/date";

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
  date: YYYYmmDD;
  numeric: number;
  timestamp: TZDateTime;
};

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;

export type BusinessDailyAttendanceLogInsertInput = {
  dailyAttendanceId: String;
  id: String;
  memo?: String;
  datetime: TZDateTime;
  state: AttendanceState;
};

export type BusinessDailyAttendanceInsertInput = {
  dailyAttendanceLogs?: {
    data: BusinessDailyAttendanceLogInsertInput[];
  };
  date: YYYYmmDD;
  breakSecond: number;
  endDatetime: TZDateTime;
  groupId: String;
  id: String;
  startDatetime: TZDateTime;
  userId: String;
};

export type BusinessDailyAttendanceSetInput = {
  breakSecond: number;
  endDatetime: TZDateTime;
  startDatetime?: TZDateTime;
};

export type AttendanceState = "attend" | "leave";
