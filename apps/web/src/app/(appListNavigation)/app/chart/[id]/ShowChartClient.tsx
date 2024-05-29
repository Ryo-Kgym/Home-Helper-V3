"use client";

import React, { useState } from "react";
import BarChart from "@app/(appListNavigation)/app/chart/[id]/BarChart";
import LineChart from "@app/(appListNavigation)/app/chart/[id]/LineChart";
import PieChart from "@app/(appListNavigation)/app/chart/[id]/PieChart";
import RadarChart from "@app/(appListNavigation)/app/chart/[id]/RadarChart";
import { Title } from "@components/ui/v4/frame/Title";
import { Select } from "@components/ui/v4/select";

const ShowChartClient = ({
  data,
  colors,
}: {
  data: { name: string; value: number }[];
  colors: string[];
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("pieChart");

  const handleSelectedChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedOption(event.target.value);
  };

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
  ];

  return (
    <div className={"space-y-4"}>
      <Title title={"chart作成画面"} />
      <select
        value={selectedOption}
        onChange={handleSelectedChange}
        className={"ml-2 mt-2 rounded-xl border px-2 py-2"}
      >
        <option value="pieChart">PieChart</option>
        <option value="barChart">BarChart</option>
        <option value="lineChart">LineChart</option>
        <option value="radarChart">RadarChart</option>
      </select>
      <Select
        data={selectData}
        label={"Select Charts"}
        value={selectedOption}
        setValue={handleSelectedChange}
      />
      <div>{renderContent()}</div>
    </div>
  );
};

export default ShowChartClient;
