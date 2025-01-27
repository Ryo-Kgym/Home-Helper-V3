import { YYYY_MM_DD } from "../../domain/date/yyyyMMdd";

export const convertToDate = (str: YYYY_MM_DD): Date => {
  const [yyyy, mm, dd] = str.split("-").map(Number);
  return new Date(yyyy!, mm! - 1, dd, 9);
};

export const convertToPrevDate = (str: YYYY_MM_DD): Date => {
  const date = convertToDate(str);
  date.setDate(date.getDate() - 1);

  return date;
};

export const convertToNextDate = (str: YYYY_MM_DD): Date => {
  const date = convertToDate(str);
  date.setDate(date.getDate() + 1);

  return date;
};
