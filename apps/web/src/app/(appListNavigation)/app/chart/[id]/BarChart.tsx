"use client";

import React from "react";
import {
  Bar,
  CartesianGrid,
  Legend,
  BarChart as ReChartBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarChart = ({
  data,
  colors,
  width,
  height,
}: {
  data: { name: string; value: number }[];
  colors: string[];
  width: string;
  height: number;
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <ReChartBarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="2 2" stroke={colors[0]} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="value"
          barSize={20}
          stroke="rgba(34, 80, 162, 0.2)"
          fill={colors[1]}
        />
      </ReChartBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
