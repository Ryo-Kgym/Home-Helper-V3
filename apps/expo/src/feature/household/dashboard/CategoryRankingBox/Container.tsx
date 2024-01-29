import { getMonth } from "~/func/date/get-month";
import { useGetCategoryTotal } from "~/hooks/household/total/useGetCategoryTotal";
import { Presenter } from "./Presenter";

export const Container = ({ baseDate }: { baseDate: Date }) => {
  const { firstDayOfMonth, lastDayOfMonth, month } = getMonth(baseDate);
  const { categoryTotal, loading } = useGetCategoryTotal({
    fromDate: firstDayOfMonth,
    toDate: lastDayOfMonth,
    iocomeType: ["OUTCOME"],
    genreType: ["FLUCTUATION"],
  });

  return (
    <Presenter
      baseDate={baseDate}
      month={month}
      categories={categoryTotal.sort((a, b) => b.amount - a.amount)}
      loading={loading}
    />
  );
};
