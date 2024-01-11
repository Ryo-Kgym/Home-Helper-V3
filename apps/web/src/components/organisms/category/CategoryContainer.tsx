/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { TableProps } from "@components/atoms/Table";
import { CategoryPresenter } from "@components/organisms/category/CategoryPresenter";
import { useGetCategoryTotalByMonth } from "@hooks/household/category/useGetCategoryTotalByMonth";
import { FC, useState } from "react";
import { DailyTableByCategory } from "@components/organisms/daily_table/category";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { useGetCreditCardSummaryBetweenMonth } from "@hooks/household/credit_card/useGetCreditCardSummaryBetweenMonth";
import { IocomeType } from "@domain/model/household/IocomeType";
import { ResponsiveSwitcher } from "@app/household/_layout/ResponsiveSwitcher";

export const CategoryContainer: FC = () => {
  const [fromMonth, setFromMonth] = useState<Date | null>(new Date());
  const [toMonth, setToMonth] = useState<Date | null>(new Date());

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

  const { data, incomeTotal, outcomeTotal } = useGetCategoryTotalByMonth(
    fromMonth,
    toMonth,
  );

  const {
    data: creditCardSummaryData,
    incomeTotal: creditCardIncomeTotal,
    outcomeTotal: creditCardOutcomeTotal,
  } = useGetCreditCardSummaryBetweenMonth(fromMonth, toMonth);

  const tableProps: TableProps[] =
    data?.categoryTotalByMonth?.map((category) => ({
      keyPrefix: "category",
      columns: [
        { value: category?.genreName, align: "left" },
        { value: category?.categoryName, align: "left" },
        {
          value: (
            <FormatPrice
              iocomeType={category?.iocomeType! as IocomeType}
              price={category?.total!}
            />
          ),
          align: "right",
        },
      ],
      onClick: () => {
        setSelectedCategoryId(category?.categoryId!);
      },
    })) ?? [];

  const creditCardTableProps: TableProps[] =
    creditCardSummaryData?.allCreditCardSummariesList?.map((summary) => ({
      keyPrefix: "creditCardSummary",
      columns: [
        {
          value: "クレジットカード",
        },
        {
          value: summary.creditCard,
        },
        {
          value: (
            <FormatPrice
              price={summary.totalAmount!}
              iocomeType={IocomeType.Outcome}
            />
          ),
          align: "right",
        },
      ],
    })) ?? [];

  return (
    <ResponsiveSwitcher
      first={
        <CategoryPresenter
          fromMonth={fromMonth}
          changeFromMonth={setFromMonth}
          toMonth={toMonth}
          changeToMonth={setToMonth}
          tableProps={tableProps.concat(creditCardTableProps)}
          incomeTotal={incomeTotal! + creditCardIncomeTotal!}
          outcomeTotal={outcomeTotal! + creditCardOutcomeTotal!}
        />
      }
      second={
        <DailyTableByCategory
          fromMonth={fromMonth!}
          toMonth={toMonth!}
          categoryId={selectedCategoryId}
        />
      }
    />
  );
};
