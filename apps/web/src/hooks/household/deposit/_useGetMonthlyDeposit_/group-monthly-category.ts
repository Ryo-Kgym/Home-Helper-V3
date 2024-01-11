/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { CategoryDetail } from "@hooks/household/deposit/_useGetMonthlyDeposit_/type";
import { MonthlyCategory } from "@hooks/household/deposit/monthlyDeposit";

/**
 * Calculates the monthly amount for a given category and year-month.
 *
 * @param {CategoryDetail} categoryDetail - The category detail object.
 * @param {string} yearMonth - The year and month for which to calculate the monthly amount. Format: "YYYY-MM".
 * @returns {MonthlyCategory} An object containing the year-month date and the calculated monthly amount for the category.
 */
export const groupMonthlyCategory = (
  categoryDetail: CategoryDetail,
  yearMonth: string,
): MonthlyCategory => {
  const amount = categoryDetail.details
    .filter((d) => d.date.toISOString().slice(0, 7) === yearMonth)
    .reduce((acc, current) => acc + current.amount, 0);

  return {
    yearMonth: new Date(yearMonth + "-01"),
    amount,
  };
};
