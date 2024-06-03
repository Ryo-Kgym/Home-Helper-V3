"use client";

import React, { ComponentProps } from "react";
import { Title } from "@components/ui/v4/frame/Title";

import { SwitchingCharts } from "./SwitchingCharts";

const ShowChartClient = ({
  data,
  colors,
}: ComponentProps<typeof SwitchingCharts>) => {
  return (
    <div className={"space-y-4"}>
      <Title title={"グラフ表示"} />
      <SwitchingCharts data={data} colors={colors} />
    </div>
  );
};

export default ShowChartClient;
