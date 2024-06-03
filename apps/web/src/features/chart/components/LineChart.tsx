import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as ReChartLineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChart = ({
  data,
  colors,
  width,
  height,
}: {
  data: { name: string; value: number }[];
  colors: string[];
  width: number;
  height: number;
}) => {
  return (
    <ReChartLineChart
      data={data}
      width={width}
      height={height}
      margin={{ top: 30, right: 15, left: 15, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke={colors[3]} />
    </ReChartLineChart>
  );
};

export default LineChart;
