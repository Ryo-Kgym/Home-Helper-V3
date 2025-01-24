import { convertToDate } from "../../../function/date/convertToDate";
import { convertToYmd } from "../../../function/date/convertToYmd";
import { YYYY_MM_DD } from "../../../types/yyyyMMdd";

export const makeDaysOfMonth = (baseDate: YYYY_MM_DD) => {
  const date = convertToDate(baseDate);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

  return Array.from(
    { length: 31 },
    (_, i) => new Date(firstDay.getFullYear(), firstDay.getMonth(), i + 1),
  )
    .filter((d) => d.getMonth() === firstDay.getMonth())
    .map(convertToYmd);
};
