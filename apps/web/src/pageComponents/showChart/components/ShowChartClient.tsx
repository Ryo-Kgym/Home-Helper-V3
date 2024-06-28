"use client";

import React, { ComponentProps } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { PageClientFrame } from "@components/ui/v4/PageClientFrame";

import { SwitchingCharts } from "./SwitchingCharts";

const ShowChartClient = ({
  data,
  colors,
}: ComponentProps<typeof SwitchingCharts>) => {
  return (
    <PageClientFrame title={<Title title={"グラフ表示"} />}>
      <SwitchingCharts data={data} colors={colors} />
    </PageClientFrame>
  );
};

export default ShowChartClient;
