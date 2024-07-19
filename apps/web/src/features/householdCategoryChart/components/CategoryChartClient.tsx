"use client";

import { FC } from "react";

import { CategoryChart } from "./CategoryChart";

type Props = {
  chartParams: Pick<
    Parameters<typeof CategoryChart>[0],
    "data" | "barchartSetting" | "areaChartSetting"
  >;
};

export const CategoryChartClient: FC<Props> = ({ chartParams }) => {
  return <CategoryChart {...chartParams} />;
};
