import { AttendanceState } from "@/core/domain/business/attend/AttendanceState";
import { GetAttendanceOfMonthDocument } from "@v3/graphql/business/schema/query/v5/queryDailyAttendance.generated";

import { convertToDate } from "../../../function/date/convertToDate";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import { YYYY_MM_DD } from "../../../types/yyyyMMdd";
import { makeDaysOfMonth } from "../function/makeDaysOfMonth";
import { DayAttendance } from "../types/type";

export const fetchDailyAttendance = async (baseDate: YYYY_MM_DD) => {
  const monthlyList = makeDaysOfMonth(baseDate);

  const { id, group } = await findUser();

  const { data } = await execQuery(GetAttendanceOfMonthDocument, {
    fromDate: convertToDate(monthlyList[0] ?? baseDate),
    toDate: convertToDate(monthlyList[monthlyList.length - 1] ?? baseDate),
    userId: id,
    groupId: group.id,
  });

  const mergedDailyList: DayAttendance[] = monthlyList.map((d) => {
    const matched = data.days.find((day) => day.date === d);

    if (!matched) {
      return {
        date: d,
        dayOfWeek: "sun",
        startDatetime: undefined,
        endDatetime: undefined,
        breakSecond: undefined,
      };
    }

    return {
      date: d,
      dayOfWeek: "sun",
      startDatetime: new Date(matched.startDatetime),
      endDatetime: new Date(matched.endDatetime),
      breakSecond: matched.breakSecond ?? 0,
    };
  });

  const baseDateLastLog = data.days
    .find((day) => day.date === baseDate)
    ?.logs.slice(-1)[0];
  const lastState = (baseDateLastLog?.type ?? "attend") as AttendanceState;

  return {
    days: mergedDailyList,
    lastState,
  };
};
