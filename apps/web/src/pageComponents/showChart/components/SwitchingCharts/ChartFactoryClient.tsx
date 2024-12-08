import React, { FC } from "react";

import BarChart from "../../../../features/chart/components/BarChart";
import LineChart from "../../../../features/chart/components/LineChart";
import PieChart from "../../../../features/chart/components/PieChart";
import RadarChart from "../../../../features/chart/components/RadarChart";
import { ChartKind } from "../../../../features/chart/types/chartKind";

/**
 * @package
 */
export type FactoryComponentProps = {
  data: { name: string; value: number }[];
  colors: string[];
};

/**
 * @package
 */
export const chartRecord: Record<
  ChartKind,
  { name: string; FactoryComponent: FC<FactoryComponentProps> }
> = {
  pieChart: {
    name: "円グラフ",
    FactoryComponent: ({ data, colors }) => (
      <PieChart
        data={data}
        colors={colors}
        outerRadius={150}
        width={400}
        height={400}
      />
    ),
  },
  barChart: {
    name: "棒グラフ",
    FactoryComponent: ({ data, colors }) => (
      <BarChart data={data} colors={colors} width={"30%"} height={400} />
    ),
  },
  lineChart: {
    name: "曲線グラフ",
    FactoryComponent: ({ data, colors }) => (
      <LineChart data={data} colors={colors} width={600} height={400} />
    ),
  },
  radarChart: {
    name: "レーダーチャート",
    FactoryComponent: ({ data }) => <RadarChart data={data} />,
  },
};
