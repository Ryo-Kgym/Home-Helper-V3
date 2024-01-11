/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { CategoryDetail } from "./type";
import { groupMonthlyCategory } from "./group-monthly-category";
import { MonthlyDeposit } from "@hooks/household/deposit/monthlyDeposit";

/**
 * Creates monthly deposits based on category details and year months.
 *
 * @param {CategoryDetail[]} categoryDetails - The list of category details.
 * @param {string[]} yearMonths - The list of year months.
 * @returns {MonthlyDeposit[]} The list of monthly deposits.
 */
export const createMonthlyDeposits = (
  categoryDetails: CategoryDetail[],
  yearMonths: string[],
): MonthlyDeposit[] =>
  categoryDetails.map((cd) => ({
    categoryId: cd.categoryId,
    categoryName: cd.categoryName,
    monthlyCategory: yearMonths.map((ym) => groupMonthlyCategory(cd, ym)),
  }));
