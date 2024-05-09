"use client";

import React from "react";
import { Title } from "@components/ui/v4/frame/Title";
import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const Page = () => {
  return (
    <div className={"space-y-10"}>
      <Title title={"chart作成画面"} />
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell - ${index}`} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default Page;
