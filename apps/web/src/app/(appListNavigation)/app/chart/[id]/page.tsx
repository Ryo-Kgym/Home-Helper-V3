"use client";

import React from "react";
import CreatePieChart from "@app/(appListNavigation)/app/chart/[id]/CreatePieChart";
import { Title } from "@components/ui/v4/frame/Title";
import { PieChart } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const Colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Page = () => {
  return (
    <div className={"space-y-10"}>
      <Title title={"chart作成画面"} />
      <div>
        <PieChart width={400} height={400}>
          <CreatePieChart data={data} Colors={Colors} />
        </PieChart>
      </div>
    </div>
  );
};

export default Page;
