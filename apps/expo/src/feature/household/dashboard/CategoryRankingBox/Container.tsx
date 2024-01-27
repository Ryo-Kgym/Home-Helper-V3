import { getMonth } from "~/func/date/get-month";
import { Presenter } from "./Presenter";
import { useGetCategoryTotal } from "./useGetCategoryTotal";

export const Container = ({ baseDate }: { baseDate: Date }) => {
  const { firstDayOfMonth, lastDayOfMonth, month } = getMonth(baseDate);
  const { categoryTotal, loading } = useGetCategoryTotal({
    fromDate: firstDayOfMonth,
    toDate: lastDayOfMonth,
    iocomeType: ["OUTCOME"],
  });

  return (
    <Presenter
      baseDate={baseDate}
      month={month}
      categories={categoryTotal.sort((a, b) => b.amount - a.amount).slice(0, 5)}
      loading={loading}
    />
  );
};
