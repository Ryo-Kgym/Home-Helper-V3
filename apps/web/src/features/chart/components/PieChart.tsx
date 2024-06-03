"use client";

import React from "react";
import { Cell, Pie, PieChart as ReChartPieChart, Tooltip } from "recharts";

const PieChart = ({
  data,
  colors,
  outerRadius,
  width,
  height,
}: {
  data: { name: string; value: number }[];
  colors: string[];
  outerRadius: number;
  width: number;
  height: number;
}) => {
  return (
    <ReChartPieChart width={width} height={height}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={true}
        outerRadius={outerRadius}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell - ${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </ReChartPieChart>
  );
};

export default PieChart;
