"use client";

import React from "react";
import BarChart from "@app/(appListNavigation)/app/chart/[id]/BarChart";
import PieChart from "@app/(appListNavigation)/app/chart/[id]/PieChart";
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
        <BarChart data={data} colors={colors} width={"50%"} height={400} />
      </div>
    </div>
  );
};

export default ShowChartClient;
