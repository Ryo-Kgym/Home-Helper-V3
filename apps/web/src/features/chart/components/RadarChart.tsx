import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as ReChartRadarChart,
  ResponsiveContainer,
} from "recharts";

const RadarChart = ({ data }: { data: { name: string; value: number }[] }) => {
  return (
    <ResponsiveContainer width={500} height={500}>
      <ReChartRadarChart cx={250} cy={250} outerRadius={150} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar
          name="test"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </ReChartRadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChart;
