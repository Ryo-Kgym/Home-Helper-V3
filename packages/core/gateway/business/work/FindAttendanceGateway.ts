import type { TZDateTime, YYYYmmDD } from "@/type/date/date";

export type FindAttendanceGateway = {
  findBy: (
    fromDate: YYYYmmDD,
    toDate: YYYYmmDD,
  ) => Promise<{
    days: {
      id: string;
      date: YYYYmmDD;
      startDatetime: TZDateTime;
      endDatetime: TZDateTime;
      breakSecond: number;
      logs: {
        id: string;
        datetime: TZDateTime;
        state: string;
        memo: string | null;
      }[];
    }[];
  }>;
};
