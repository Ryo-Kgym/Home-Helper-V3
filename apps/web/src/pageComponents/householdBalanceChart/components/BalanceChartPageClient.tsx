"use client";

import { FC } from "react";
import { BalanceChart } from "@features/householdBalanceChart/components/BalanceChart";
import { BalanceChartContainer } from "@features/householdBalanceChart/components/BalanceChartContainer";

type Props = {
  chartParams: Pick<
    Parameters<typeof BalanceChart>[0],
    "data" | "barchartSetting" | "areaChartSetting"
  >;
};

export const BalanceChartPageClient: FC<Props> = ({ chartParams }) => {
  return <BalanceChartContainer {...chartParams} />;
};
