/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { GetDepositQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { CategoryDetail, Detail } from "./type";

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
    categoryId: dc.category.id as string,
    categoryName: dc.category.categoryName as string,
    details: [
      ...dc.category.daily.nodes.map(
        (d) =>
          ({
            detailId: d.id as string,
            type: "daily",
            date: new Date(d.date),
            amount: d.amount as number,
            memo: d.memo as string,
          }) as Detail,
      ),
      ...dc.category.credit.nodes.map(
        (d) =>
          ({
            detailId: d.id as string,
            type: "credit",
            date: new Date(d.date),
            amount: d.amount as number,
            memo: d.memo as string,
          }) as Detail,
      ),
    ],
  })) ?? [];
