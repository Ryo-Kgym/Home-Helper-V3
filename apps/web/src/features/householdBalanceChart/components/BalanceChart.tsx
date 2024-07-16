import { ReactNode } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CategoricalChartState } from "recharts/types/chart/types";

import { TooltipContent } from "./TooltipContent";

export const BalanceChart = <T extends string>({
  settings,
  data,
  onClick,
}: {
  settings: Record<
    T,
    {
      color: string;
      group: string;
    }
  >;
  data: Record<string, Record<T, number>>;
  onClick?: (event: CategoricalChartState) => void;
  tooltip?: ReactNode;
}) => {
  return (
    <ResponsiveContainer>
      <ComposedChart
        data={Object.entries(data).map(([key, value]) => ({
          name: key,
          ...value,
        }))}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        onClick={onClick}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={TooltipContent} />
        <Legend />
        <ReferenceLine stroke="#000" />
        <Area
          type="monotone"
          dataKey="assets"
          fill="green"
          stroke="#8884d8"
          stackId={1}
        />
        <Area
          type="monotone"
          dataKey="cumulative"
          fill="#8884d8"
          stroke="#8884d8"
          stackId={1}
        />
        {Object.entries<{
          color: string;
          group: string;
        }>(settings).map(([key, { color, group }]) => (
          <Bar key={key} dataKey={key} fill={color} stackId={group} />
        ))}
      </ComposedChart>
    </ResponsiveContainer>
  );
};
