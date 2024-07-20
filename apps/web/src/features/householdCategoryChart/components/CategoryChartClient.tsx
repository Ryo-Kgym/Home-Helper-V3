"use client";

import { FC, useState } from "react";
import { YearMonth } from "@features/householdCategoryChart/components/types";

import { CategoryChartData } from "../types";
import { CategoryChart } from "./CategoryChart";

type Props = {
  fromDate: Date;
  toDate: Date;
  categoryChartData: CategoryChartData;
};

export const CategoryChartClient: FC<Props> = ({
  fromDate,
  toDate,
  categoryChartData,
}) => {
  const [categories, setCategories] = useState<string[]>([
    "01HJ586VM6WGDH5X7CM8R6ZSC6", // 消耗品
    "01HJ586VMC8YVZ04C1EZ3QY5NR", // コンビニ
    "01HJ586VMHBKDR7BCFDX139NFA", // 外食
    "01HJ586VNN6MTDSP17VH3DJY8W", // 車のローン
  ]);

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
    <CategoryChart
      categories={categories.map((categoryId) => ({
        categoryId,
        categoryName: categoryChartData[categoryId]?.categoryName ?? "unknown",
        color: randomColor(),
      }))}
      data={makeEmptyData()}
    />
  );
};

export const randomColor = () => {
  return (
    "#" +
    [0, 1, 2, 3, 4, 5]
      .map((_) => Math.floor(Math.random() * 0x10).toString(16))
      .join("")
  );
};
