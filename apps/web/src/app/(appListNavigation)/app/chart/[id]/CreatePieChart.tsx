"use client";

import React from "react";
import { Cell, Pie } from "recharts";

const CreatePieChart = ({
  data,
  Colors,
}: {
  data: { name: string; value: number }[];
  Colors: string[];
}) => {
  return (
    <Pie
      data={data}
      cx={200}
      cy={200}
      labelLine={false}
      outerRadius={150}
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell - ${index}`} fill={Colors[index % Colors.length]} />
      ))}
    </Pie>
  );
};

export default CreatePieChart;
