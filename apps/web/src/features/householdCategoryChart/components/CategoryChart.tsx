import React, { FC } from "react";
import { YearMonth } from "@features/householdCategoryChart/components/types";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CategoricalChartState } from "recharts/types/chart/types";

type Props = {
  categories: { categoryId: string; categoryName: string; color: string }[];
  data: Record<YearMonth, Record<string, number>>;
  onClick?: (event: CategoricalChartState) => void;
};

export const CategoryChart: FC<Props> = ({ categories, data, onClick }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={Object.entries(data).map(([k, v]) => ({
          name: k,
          ...v,
        }))}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
        onClick={onClick}
      >
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis
          dataKey="name"
          height={60}
          tick={({ x, y, payload }) => (
            <g transform={`translate(${x},${y})`}>
              <text
                x={0}
                y={0}
                dy={16}
                textAnchor="end"
                fill="#666"
                transform="rotate(-35)"
              >
                {payload.value}
              </text>
            </g>
          )}
          padding={{ left: 30, right: 30 }}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        {categories.map((category) => (
          <Line
            key={category.categoryId}
            dataKey={category.categoryName}
            stroke={category.color}
            label={({ x, y, stroke, value }) => (
              <text
                x={x}
                y={y}
                dy={-4}
                fill={stroke}
                fontSize={10}
                textAnchor="middle"
              >
                {Number(value).toLocaleString()}
              </text>
            )}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
