import { ReactNode } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { CategoricalChartState } from "recharts/types/chart/types";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

export const RechartBarChart = <T extends string>({
  settings,
  data,
  onClick,
}: {
  settings: Record<
    T,
    {
      color: string;
    }
  >;
  data: Record<string, Record<T, number>>;
  onClick?: (event: CategoricalChartState) => void;
  tooltip?: ReactNode;
}) => {
  return (
    <ResponsiveContainer>
      <BarChart
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
        <Tooltip content={getTooltipContent} />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        {Object.entries<{
          color: string;
        }>(settings).map(([key, { color }]) => (
          <Bar key={key} dataKey={key} fill={color} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

const getTooltipContent = ({ payload }: TooltipProps<ValueType, NameType>) => (
  <div className={"space-y-3 bg-white p-3"}>
    {payload?.map((p) => (
      <span
        key={p.name}
        className={`flex items-center justify-between space-x-5`}
      >
        <span>{p.name}</span>
        <span
          style={{
            color: p.color,
          }}
        >
          {p.value?.toLocaleString()}
        </span>
      </span>
    ))}
  </div>
);
