"use client";

import React from "react";
import PieChart from "@app/(appListNavigation)/app/chart/[id]/PieChart";
import { Title } from "@components/ui/v4/frame/Title";

const ShowPieChartClient = ({
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
      </div>
    </div>
  );
};

export default ShowPieChartClient;
