/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { convertToYyyyMm } from "./convert-to-yyyy-mm";

/**
 * Generates a list of year-month string values between two given dates.
 *
 * @param {Date} fromDate - The starting date.
 * @param {Date} toDate - The ending date.
 * @returns {Array} - A list of year-month string values.
 */
export const generateYearMonthList = (fromDate: Date, toDate: Date) => {
  if (fromDate > toDate) {
    throw new Error("fromDate must be less than or equal to toDate");
  }

  const yearMonths = [convertToYyyyMm(fromDate)];
  let yearMonthVariable = yearMonths[0];

  while (yearMonthVariable !== convertToYyyyMm(toDate)) {
    const year = parseInt(yearMonthVariable.slice(0, 4));
    const month = parseInt(yearMonthVariable.slice(5, 7));
    if (month === 12) {
      yearMonthVariable = `${year + 1}-01`;
    } else {
      yearMonthVariable = `${year}-` + (month + 1).toString().padStart(2, "0");
    }
    yearMonths.push(yearMonthVariable);
  }
  return yearMonths;
};
