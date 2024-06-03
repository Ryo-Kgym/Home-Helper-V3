"use client";

import React, { useState } from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { Select } from "@components/ui/v4/select";
import BarChart from "@features/chart/components/BarChart";
import LineChart from "@features/chart/components/LineChart";
import PieChart from "@features/chart/components/PieChart";
import RadarChart from "@features/chart/components/RadarChart";

const ShowChartClient = ({
  data,
  colors,
}: {
  data: { name: string; value: number }[];
  colors: string[];
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("pieChart");

  const renderContent = () => {
    switch (selectedOption) {
      case "pieChart":
        return (
          <PieChart
            data={data}
            colors={colors}
            outerRadius={150}
            width={400}
            height={400}
          />
        );
      case "barChart":
        return (
          <BarChart data={data} colors={colors} width={"30%"} height={400} />
        );
      case "lineChart":
        return (
          <LineChart data={data} colors={colors} width={600} height={400} />
        );
      case "radarChart":
        return <RadarChart data={data} />;
    }
  };

  const selectData = [
    { value: "pieChart", label: "PieChart" },
    { value: "barChart", label: "BarChart" },
    { value: "lineChart", label: "LineChart" },
    { value: "radarChart", label: "RadarChart" },
  ];

  return (
    <div className={"space-y-4"}>
      <Title title={"chart作成画面"} />
      <Select
        data={selectData}
        label={"Select Charts"}
        value={selectedOption}
        setValue={setSelectedOption}
      />
      <div>{renderContent()}</div>
    </div>
  );
};

export default ShowChartClient;
