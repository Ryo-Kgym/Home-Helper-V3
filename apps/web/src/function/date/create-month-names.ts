/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

/**
 * Generates an array of month names between two given dates.
 *
 * @param {Date} fromMonth - The starting month.
 * @param {Date} toMonth - The ending month.
 * @returns {string[]} An array of month names in the format 'YYYY年MM月'.
 */
export const createMonthNames = (fromMonth: Date, toMonth: Date) => {
  let iterator = fromMonth;
  let prevYear = 0;
  let monthNames: string[] = [];
  while (iterator <= toMonth) {
    let year = "";
    if (prevYear !== iterator.getFullYear()) {
      prevYear = iterator.getFullYear();
      year = `${iterator.getFullYear()}年`;
    }
    const month = (iterator.getMonth() + 1).toString().padStart(2, "0");
    monthNames.push(`${year}${month}月`);
    iterator = new Date(iterator.getFullYear(), iterator.getMonth() + 1, 1);
  }

  return monthNames;
};
