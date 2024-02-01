import { getMonth } from "~/func/date/get-month";
import { useGetCategoryTotal } from "~/hooks/household/total/useGetCategoryTotal";
import { Presenter } from "./Presenter";

export const Container = ({ month }: { month: Date }) => {
  const { firstDayOfMonth, lastDayOfMonth, month: monthNum } = getMonth(month);
  const { categoryTotal, loading } = useGetCategoryTotal({
    fromDate: firstDayOfMonth,
    toDate: lastDayOfMonth,
    iocomeType: ["OUTCOME"],
    genreType: ["FLUCTUATION"],
  });

  return (
    <Presenter
      baseDate={month}
      month={monthNum}
      categories={categoryTotal.sort((a, b) => b.amount - a.amount)}
      loading={loading}
    />
  );
};
