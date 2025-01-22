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
  time: string;
  type: AttendanceType;
};

export type BusinessDailyAttendanceInsertInput = {
  dailyAttendanceLogs?: {
    data: BusinessDailyAttendanceLogInsertInput[];
  };
  date: Date;
  endTime: string;
  groupId: String;
  id: String;
  startTime: string;
  userId: String;
};

export type AttendanceType = "attend" | "leave";
