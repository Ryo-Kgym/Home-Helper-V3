import { YYYY_MM_DD } from "@/type/date/date";

export const convertToDate = (str: YYYY_MM_DD): Date => {
  const [yyyy, mm, dd] = str.split("-").map(Number);
  return new Date(yyyy!, mm! - 1, dd, 9);
};
