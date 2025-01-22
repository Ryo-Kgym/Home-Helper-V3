import dayjs from "dayjs";

import { YYYY_MM_DD } from "../../types/yyyyMMdd";

export const convertToYmd = (date: Date): YYYY_MM_DD => {
  return dayjs(date).format("YYYY-MM-DD") as YYYY_MM_DD;
};
