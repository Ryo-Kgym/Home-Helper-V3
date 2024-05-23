"use client";

import React from "react";
import BarChart from "@app/(appListNavigation)/app/chart/[id]/BarChart";
import LineChart from "@app/(appListNavigation)/app/chart/[id]/LineChart";
import PieChart from "@app/(appListNavigation)/app/chart/[id]/PieChart";
import RadarChart from "@app/(appListNavigation)/app/chart/[id]/RadarChart";
import { Title } from "@components/ui/v4/frame/Title";

const ShowChartClient = ({
  data,
  colors,
}: {
  data: { name: string; value: number }[];
  colors: string[];
}) => {
  return (
    <div className={"space-y-10"}>
      <Title title={"chart作成画面"} />
      <div className={"flex justify-center"}>
        <PieChart
          data={data}
          colors={colors}
          outerRadius={150}
          width={400}
          height={400}
        />
        <BarChart data={data} colors={colors} width={"30%"} height={400} />
        <LineChart data={data} colors={colors} width={600} height={400} />
      </div>
      <div>
        <RadarChart data={data} />
      </div>
    </div>
  );
};

export default ShowChartClient;
