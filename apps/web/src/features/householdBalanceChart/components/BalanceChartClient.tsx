"use client";

import { FC } from "react";
import { BalanceChart } from "@features/householdBalanceChart/components/BalanceChart";
import { useNavigation } from "@routing/client/useNavigation";

type Props = Pick<
  Parameters<typeof BalanceChart>[0],
  "data" | "barchartSetting" | "areaChartSetting"
>;

export const BalanceChartClient: FC<Props> = ({
  data,
  barchartSetting,
  areaChartSetting,
}) => {
  const { prependParamAndPush } = useNavigation();

  return (
    <BalanceChart
      data={data}
      barchartSetting={barchartSetting}
      areaChartSetting={areaChartSetting}
      onClick={(event) => {
        if (!event.activeLabel) {
          return;
        }
        prependParamAndPush({
          watch: event.activeLabel,
          dateType: "withdrawalDate",
        });
      }}
    />
  );
};
