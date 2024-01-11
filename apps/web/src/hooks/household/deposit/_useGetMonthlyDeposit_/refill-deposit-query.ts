/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { GetDepositQuery } from "@/turbo/graphql/household";

import type { CategoryDetail, Detail } from "./type";

/**
 * Returns an array of CategoryDetail objects based on the provided GetDepositQuery data.
 *
 * @param {GetDepositQuery} data - The deposit query data.
 * @returns {CategoryDetail[]} An array of CategoryDetail objects.
 */
export const refillDepositQuery = (
  data: GetDepositQuery | undefined,
): CategoryDetail[] =>
  data?.depositCategory.map((dc) => ({
    categoryId: dc.category.id,
    categoryName: dc.category.categoryName,
    details: [
      ...dc.category.daily.nodes.map(
        (d) =>
          ({
            detailId: d.id,
            type: "daily",
            date: new Date(d.date as string),
            amount: d.amount as number,
            memo: d.memo,
          }) as Detail,
      ),
      ...dc.category.credit.nodes.map(
        (d) =>
          ({
            detailId: d.id,
            type: "credit",
            date: new Date(d.date as string),
            amount: d.amount as number,
            memo: d.memo,
          }) as Detail,
      ),
    ],
  })) ?? [];
