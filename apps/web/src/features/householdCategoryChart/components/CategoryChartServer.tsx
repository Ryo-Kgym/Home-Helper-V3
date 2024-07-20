import { fetchCategoryChartData } from "../server/fetchCategoryChartData";
import { CategoryChartClient } from "./CategoryChartClient";

export const CategoryChartServer = async ({
  fromDate,
  toDate,
}: {
  fromDate: Date | undefined;
  toDate: Date | undefined;
}) => {
  const { data } = await fetchCategoryChartData({
    fromDate: fromDate ?? getPast12MonthDate(),
    toDate: toDate ?? new Date(),
  });

  return (
    <CategoryChartClient
    // chartParams={{
    //   barchartSetting: barchartSetting,
    //   data,
    // }}
    />
  );
};

const getPast12MonthDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 12);
  return date;
};
