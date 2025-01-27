import { YYYY_MM_DD } from "../../../domain/date/yyyyMMdd";

export type FindAttendanceGateway = {
  findBy: (
    fromDate: YYYY_MM_DD,
    toDate: YYYY_MM_DD,
  ) => Promise<{
    days: {
      id: string;
      date: string;
      startDatetime: Date;
      endDatetime: Date;
      breakSecond: number;
      logs: {
        id: string;
        datetime: Date;
        state: string;
        memo: string | null;
      }[];
    }[];
  }>;
};
