import { IocomeType } from "@domain/model/household/IocomeType";
import { useGroup } from "@hooks/group/useGroup";
import { useGetDailyDetailByDateCategoryIdQuery } from "@v3/graphql/household";

export const useGetDailyDetailByDateCategoryId = (
  categoryId: string,
  fromDate: Date,
  toDate: Date,
) => {
  const { groupId } = useGroup();

  const [{ data, fetching, error }] = useGetDailyDetailByDateCategoryIdQuery({
    variables: {
      fromDate,
      toDate,
      categoryId,
      groupId,
    },
  });

  const incomeTotal = data?.dailyDetailByDateList
    ?.filter(
      (detail) =>
        (detail.categoryByCategoryId.genreByGenreId
          .iocomeType as IocomeType) === IocomeType.Income,
    )
    .reduce((a, b) => a + Number(b.amount), 0);

  const outcomeTotal = data?.dailyDetailByDateList
    ?.filter(
      (detail) =>
        (detail.categoryByCategoryId.genreByGenreId
          .iocomeType as IocomeType) === IocomeType.Outcome,
    )
    .reduce((a, b) => a + Number(b.amount), 0);

  return { data, fetching, error, incomeTotal, outcomeTotal };
};
