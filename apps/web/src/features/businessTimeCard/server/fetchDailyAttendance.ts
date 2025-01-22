import { GetDailyAttendanceDocument } from "@v3/graphql/business/schema/query/v5/queryDailyAttendance.generated";

import { convertToDate } from "../../../function/date/convertToDate";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import { YYYY_MM_DD } from "../../../types/yyyyMMdd";
import { makeDaysOfMonth } from "../function/makeDaysOfMonth";
import { DayAttendance } from "../types/type";

export const fetchDailyAttendance = async (baseDate: YYYY_MM_DD) => {
  const monthlyList = makeDaysOfMonth(baseDate);

  const { id, group } = await findUser();

  const { data } = await execQuery(GetDailyAttendanceDocument, {
    date: convertToDate(baseDate),
    userId: id,
    groupId: group.id,
  });

  const mergedDailyList: DayAttendance[] = monthlyList.map((d) => {
    const matched = data.days.find((day) => day.date === d);

    return {
      date: d,
      dayOfWeek: "sun",
      startTime: matched?.startTime,
      endTime: matched?.endTime,
      breakTime: undefined,
    };
  });

  return {
    days: mergedDailyList,
  };
};
