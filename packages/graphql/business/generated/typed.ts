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
  date: Date;
  numeric: number;
  timestamp: Date;
};

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;

export type BusinessDailyAttendanceLogInsertInput = {
  dailyAttendanceId: String;
  id: String;
  memo?: String;
  datetime: Date;
  state: AttendanceState;
};

export type BusinessDailyAttendanceInsertInput = {
  dailyAttendanceLogs?: {
    data: BusinessDailyAttendanceLogInsertInput[];
  };
  date: Date;
  breakSecond: number;
  endDatetime: Date;
  groupId: String;
  id: String;
  startDatetime: Date;
  userId: String;
};

export type BusinessDailyAttendanceSetInput = {
  breakSecond: number;
  endDatetime: Date;
  startDatetime?: Date;
};

export type AttendanceState = "attend" | "leave";
