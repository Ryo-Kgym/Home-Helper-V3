/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

export type CategoryDetail = {
  categoryId: string;
  categoryName: string;
  details: Detail[];
};

export type Detail = {
  detailId: string;
  type: "daily" | "credit";
  date: Date;
  amount: number;
  memo: string;
};
