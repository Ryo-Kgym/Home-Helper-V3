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

const BarChart = ({ data }: { data: { name: string; value: number }[] }) => {
  return (
    <ResponsiveContainer width="50%" height={400}>
      <ReChartBarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="2 2" stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="value"
          barSize={20}
          stroke="rgba(34, 80, 162, 0.2"
          fill="#2250A2"
        />
      </ReChartBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
