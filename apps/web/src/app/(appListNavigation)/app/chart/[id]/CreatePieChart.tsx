"use client";

import React from "react";
import { Cell, Pie, PieChart } from "recharts";

const CreatePieChart = ({
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
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={outerRadius}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell - ${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default CreatePieChart;
