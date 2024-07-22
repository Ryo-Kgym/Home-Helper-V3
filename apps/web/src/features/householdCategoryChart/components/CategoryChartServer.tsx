import { extractComboBoxData } from "@features/householdCategoryChart/server/extractComboBoxData";
import { sortByTotal } from "@features/householdCategoryChart/server/sortByTotal";

import { fetchCategoryChartData } from "../server/fetchCategoryChartData";
import { CategoryChartClient } from "./CategoryChartClient";

const getPast12MonthDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 12);
  return date;
};

export const CategoryChartServer = async ({
  fromDate = getPast12MonthDate(),
  toDate = new Date(),
}: {
  fromDate: Date | undefined;
  toDate: Date | undefined;
}) => {
  const { data } = await fetchCategoryChartData({
    fromDate,
    toDate,
  });

  const comboBoxData = extractComboBoxData(data);
  const defaultCategoryIds = sortByTotal(
    data,
    (() => {
      const date = new Date(toDate);
      date.setMonth(date.getMonth() - 1);
      return date;
    })(),
  );

  return (
    <CategoryChartClient
      fromDate={fromDate}
      toDate={toDate}
      categoryChartData={data}
      comboBoxData={comboBoxData}
      defaultCategoryIds={defaultCategoryIds}
    />
  );
};
