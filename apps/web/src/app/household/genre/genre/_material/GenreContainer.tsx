/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

"use client";

import { ResponsiveSwitcher } from "@app/household/_layout/ResponsiveSwitcher";
import { FormatPrice } from "@components/molecules/FormatPrice/index";
import { DailyTableByGenre } from "@components/organisms/daily_table/genre/index";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useGetCreditCardSummaryBetweenMonth } from "@hooks/household/credit_card/useGetCreditCardSummaryBetweenMonth";
import { useGetGenreTotalByMonth } from "@hooks/household/genre/useGetGenreTotalByMonth";
import { useState } from "react";

import { GenrePresenter } from "./GenrePresenter";

import type { TableProps } from "@components/atoms/Table";

export const GenreContainer = () => {
  const [fromMonth, setFromMonth] = useState<Date | null>(new Date());
  const [toMonth, setToMonth] = useState<Date | null>(new Date());

  const [selectedGenreId, setSelectedGenreId] = useState<string>("");

  const { data, incomeTotal, outcomeTotal } = useGetGenreTotalByMonth(
    fromMonth,
    toMonth,
  );

  const {
    data: creditCardSummaryData,
    incomeTotal: creditCardIncomeTotal,
    outcomeTotal: creditCardOutcomeTotal,
  } = useGetCreditCardSummaryBetweenMonth(fromMonth, toMonth);

  const tableProps: TableProps[] =
    data?.genreTotalByMonthList?.map((genre) => {
      return {
        keyPrefix: "genre",
        columns: [
          { value: genre?.genreName, align: "left" },
          {
            value: (
              <FormatPrice
                iocomeType={genre?.iocomeType as IocomeType}
                price={genre?.total as number}
              />
            ),
            align: "right",
          },
        ],
        onClick: () => {
          setSelectedGenreId(genre.genreId!);
        },
      };
    }) ?? [];

  const creditCardTableProps: TableProps[] =
    creditCardSummaryData?.creditCardSummaries?.map((summary) => {
      return {
        keyPrefix: "creditCardSummary",
        columns: [
          {
            value: summary.creditCard,
          },
          {
            value: (
              <FormatPrice
                price={summary.totalAmount as number}
                iocomeType={IocomeType.Outcome}
              />
            ),
            align: "right",
          },
        ],
      };
    }) ?? [];

  return (
    <ResponsiveSwitcher
      first={
        <GenrePresenter
          fromMonth={fromMonth}
          changeFromMonth={setFromMonth}
          toMonth={toMonth}
          changeToMonth={setToMonth}
          tableProps={tableProps.concat(creditCardTableProps)}
          incomeTotal={incomeTotal! + creditCardIncomeTotal}
          outcomeTotal={outcomeTotal! + creditCardOutcomeTotal}
        />
      }
      second={
        <DailyTableByGenre
          fromMonth={fromMonth!}
          toMonth={toMonth!}
          genreId={selectedGenreId}
        />
      }
    />
  );
};
