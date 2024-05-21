import ShowChartClient from "@app/(appListNavigation)/app/chart/[id]/ShowChartClient";

export const ShowChartServer = async () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return <ShowChartClient data={data} colors={colors} />;
};
