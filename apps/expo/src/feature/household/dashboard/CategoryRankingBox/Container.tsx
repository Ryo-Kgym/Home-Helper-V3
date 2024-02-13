import type { GenreType } from "~/types/genre-type";
import { getMonth } from "~/func/date/get-month";
import { useGetCategoryTotal } from "~/hooks/household/total/useGetCategoryTotal";
import { Presenter } from "./Presenter";

export const Container = ({
  month,
  genreType,
}: {
  month: Date;
  genreType: GenreType[];
}) => {
  const { firstDayOfMonth, lastDayOfMonth, month: monthNum } = getMonth(month);
  const { categoryTotal, loading } = useGetCategoryTotal({
    fromDate: firstDayOfMonth,
    toDate: lastDayOfMonth,
    iocomeType: ["OUTCOME"],
    genreType,
  });

  return (
    <Presenter
      baseDate={month}
      month={monthNum}
      categories={categoryTotal.sort((a, b) => b.amount - a.amount)}
      loading={loading}
      genreType={genreType}
    />
  );
};
