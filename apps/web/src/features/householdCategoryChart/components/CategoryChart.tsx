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

import { CategoryChartTooltipContent } from "./CategoryChartTooltipContent";

type BarChartSetting = Record<
  string,
  {
    color: string;
    group: string;
    label: string;
  }
>;

type AreaChartSetting = Record<
  string,
  {
    color: string;
    group: string;
    label: string;
  }
>;

export const CategoryChart = <T extends string>({
  barchartSetting,
  areaChartSetting,
  data,
  onClick,
}: {
  barchartSetting: BarChartSetting;
  areaChartSetting: AreaChartSetting;
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
        <Tooltip content={CategoryChartTooltipContent} />
        <Legend />
        <ReferenceLine stroke="#000" />

        {Object.entries(areaChartSetting).map(([key, { color, group }]) => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            fill={color}
            stroke={color}
            stackId={group}
          />
        ))}

        {Object.entries<{
          color: string;
          group: string;
        }>(barchartSetting).map(([key, { color, group }]) => (
          <Bar key={key} dataKey={key} fill={color} stackId={group} />
        ))}
      </ComposedChart>
    </ResponsiveContainer>
  );
};
