"use client";

import { FC } from "react";
import { BarChart } from "@components/ui/v4/chart/barChart";

type Props = {
  chartParams: Parameters<typeof BarChart>[0];
};

export const BalanceChartPageClient: FC<Props> = ({ chartParams }) => {
  return <BarChart {...chartParams} />;
};
