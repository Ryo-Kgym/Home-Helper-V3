/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

export type MonthlyDeposit = {
  categoryId: string;
  categoryName: string;
  monthlyCategory: MonthlyCategory[];
};
export type MonthlyCategory = {
  yearMonth: Date; // yyyy-MM-01
  amount: number;
};