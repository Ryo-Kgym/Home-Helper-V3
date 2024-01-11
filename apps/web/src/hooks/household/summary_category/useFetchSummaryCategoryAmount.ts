/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { IocomeType } from "@domain/model/household/IocomeType";
import {
  TotalAmountByMonthly,
  totalAmountByMonthly,
  TotalAmountByMonthlyArgs,
} from "@function/monthly/totalAmountByMonthly";
import {
  useGetSummaryCategoryBetweenDateQuery,
  useGetTransferCategoryByQuery,
} from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";

type Args = {
  fromMonth: Date;
  toMonth: Date;
};

type InterfaceType = (_: Args) => {
  data: TotalAmountByMonthly<MonthlyCategoryKey>[];
  incomeTotal: TotalAmountByMonthly<MonthlyCategoryKey>;
  outcomeTotal: TotalAmountByMonthly<MonthlyCategoryKey>;
};

export const useFetchSummaryCategoryAmount: InterfaceType = ({
  fromMonth,
  toMonth,
}) => {
  const { groupId } = useGroup();

  const [{ data }] = useGetSummaryCategoryBetweenDateQuery({
    variables: {
      groupId,
      fromDate: fromMonth!.toISOString().slice(0, 10),
      toDate: toMonth!.toISOString().slice(0, 10),
    },
  });
  const [{ data: tcData }] = useGetTransferCategoryByQuery({
    variables: {
      groupId,
    },
  });

  const args: TotalAmountByMonthlyArgs<MonthlyCategoryKey>[] =
    data?.summaryCategoryList?.map((sc) => ({
      key: {
        categoryId: sc.category?.id!,
        categoryName: sc.category?.name!,
        iocomeType: sc.category?.genre?.iocomeType! as IocomeType,
      },
      list: (
        sc.category?.daily.map((d) => ({
          month: d.date.slice(0, 7) as string,
          amount: Number(d.amount),
        })) ?? []
      ).concat(
        sc.category?.creditCard.map((cc) => ({
          key: {
            categoryId: sc.category?.id!,
            categoryName: sc.category?.name!,
            iocomeType: sc.category?.genre?.iocomeType!,
          },
          month: cc.date.slice(0, 7) as string,
          amount: Number(cc.amount),
        })) ?? [],
      ),
      fromDate: fromMonth,
      toDate: toMonth,
    })) ?? [];

  const monthlyTotalByCategory = args.map((a) => totalAmountByMonthly(a));
  const size = monthlyTotalByCategory[0]?.monthlyTotal.length ?? 0;
  const defaultMonthlyTotal = new Array<number>(size).fill(0);

  const incomeTotal: TotalAmountByMonthly<MonthlyCategoryKey> =
    monthlyTotalByCategory
      .filter((d) => d.key.iocomeType === IocomeType.Income)
      .filter(
        (d) =>
          d.key.categoryId !==
          tcData?.transferCategory?.incomeCategory.categoryId,
      )
      .reduce(
        (a, b) => ({
          key: {
            categoryId: "income",
            categoryName: "収入",
            iocomeType: IocomeType.Income,
          },
          monthlyTotal: a.monthlyTotal.map((v, i) => v + b.monthlyTotal[i]),
          total: a.total + b.total,
        }),
        {
          key: {
            categoryId: "income",
            categoryName: "収入",
            iocomeType: IocomeType.Income,
          },
          monthlyTotal: defaultMonthlyTotal,
          total: 0,
        },
      );

  const outcomeTotal: TotalAmountByMonthly<MonthlyCategoryKey> =
    monthlyTotalByCategory
      .filter((d) => d.key.iocomeType === IocomeType.Outcome)
      .filter(
        (d) =>
          d.key.categoryId !==
          tcData?.transferCategory?.outcomeCategory.categoryId,
      )
      .reduce(
        (a, b) => ({
          key: {
            categoryId: "outcome",
            categoryName: "支出",
            iocomeType: IocomeType.Outcome,
          },
          monthlyTotal: a.monthlyTotal.map((v, i) => v + b.monthlyTotal[i]),
          total: a.total + b.total,
        }),
        {
          key: {
            categoryId: "outcome",
            categoryName: "支出",
            iocomeType: IocomeType.Outcome,
          },
          monthlyTotal: defaultMonthlyTotal,
          total: 0,
        },
      );

  return {
    data: monthlyTotalByCategory,
    incomeTotal,
    outcomeTotal,
  };
};

export type MonthlyCategoryKey = {
  categoryId: string;
  categoryName: string;
  iocomeType: IocomeType;
};
