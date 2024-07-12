"use client";

import { FC } from "react";
import { BarChart } from "@components/ui/v4/chart/barChart";
import { useNavigation } from "@routing/client/useNavigation";

type Props = {
  chartParams: Pick<Parameters<typeof BarChart>[0], "data" | "settings">;
};

export const BalanceChartPageClient: FC<Props> = ({ chartParams }) => {
  const { prependParamAndPush } = useNavigation();

  return (
    <BarChart
      {...chartParams}
      onClick={(event) => {
        if (!event.activeLabel) {
          return;
        }
        prependParamAndPush({ key: "watch", value: event.activeLabel });
      }}
    />
  );
};
