import { Presenter } from "~/feature/household/dashboard/CategoryRankingBox/Presenter";
import { useGetCategoryTotal } from "~/feature/household/dashboard/CategoryRankingBox/useGetCategoryTotal";
import { getMonth } from "~/func/date/get-month";

export const Container = () => {
  const { firstDayOfMonth, lastDayOfMonth, month } = getMonth();
  const { categoryTotal, loading } = useGetCategoryTotal({
    fromDate: firstDayOfMonth,
    toDate: lastDayOfMonth,
  });

  return (
    <Presenter
      month={month}
      categories={categoryTotal
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 10)}
      loading={loading}
    />
  );
};
