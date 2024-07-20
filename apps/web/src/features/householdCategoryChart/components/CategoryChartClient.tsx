"use client";

import { FC, useState } from "react";
import { ComboBox } from "@components/ui/v4/comboBox";
import { useNavigation } from "@routing/client/useNavigation";
import { colors } from "@styles/colors";

import { CategoryChartData } from "../types";
import { CategoryChart } from "./CategoryChart";
import { YearMonth } from "./types";

type Props = {
  fromDate: Date;
  toDate: Date;
  categoryChartData: CategoryChartData;
  comboBoxData: Parameters<typeof ComboBox>[0]["data"];
};

export const CategoryChartClient: FC<Props> = ({
  fromDate,
  toDate,
  categoryChartData,
  comboBoxData,
}) => {
  const { prependParamAndPush } = useNavigation();

  const [categories, setCategories] = useState<string[]>([]);

  const makeEmptyData = (): Record<YearMonth, Record<string, number>> => {
    const data: Record<YearMonth, Record<string, number>> = {};

    const date = new Date(fromDate);
    while (date <= toDate) {
      const key = date.toISOString().slice(0, 7) as YearMonth;
      data[key] = Object.fromEntries(
        categories.map((category) => [
          categoryChartData[category]?.categoryName,
          categoryChartData[category]?.monthlyTotal[key] ?? 0,
        ]),
      );
      date.setMonth(date.getMonth() + 1);
    }

    return data;
  };

  return (
    <>
      <CategoryChart
        categories={categories.map((categoryId, index) => ({
          categoryId,
          categoryName:
            categoryChartData[categoryId]?.categoryName ?? "unknown",
          color: colors.random(index),
        }))}
        data={makeEmptyData()}
        onClick={(event) => {
          if (!event.activeLabel) {
            return;
          }
          prependParamAndPush({
            watch: event.activeLabel,
            dateType: "settlementDate",
          });
        }}
      />
      <ComboBox
        value={categories}
        setValue={setCategories}
        data={comboBoxData}
        label={"カテゴリ"}
      />
    </>
  );
};
