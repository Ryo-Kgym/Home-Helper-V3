import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CategoricalChartState } from "recharts/types/chart/types";

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
        <Tooltip />
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
