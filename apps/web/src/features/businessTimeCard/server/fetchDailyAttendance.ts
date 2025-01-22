import { YYYY_MM_DD } from "../../../types/yyyyMMdd";
import { makeDaysOfMonth } from "../function/makeDaysOfMonth";
import { DayAttendance } from "../types/type";

export const fetchDailyAttendance = async (baseDate: YYYY_MM_DD) => {
  const monthlyList = makeDaysOfMonth(baseDate);

  const mergedDailyList: DayAttendance[] = monthlyList.map((d) => {
    return {
      date: d,
      dayOfWeek: "sun",
      startTime: "09:00",
      endTime: "18:00",
      breakTime: "01:00",
    };
  });

  return {
    days: mergedDailyList,
  };
};
