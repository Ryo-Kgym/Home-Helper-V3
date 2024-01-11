import type { GetDailyDetailByDateGenreIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useGetDailyDetailByDateGenreIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";

export const useGetDailyDetailByDateGenreId = (
  genreId: string,
  fromDate: Date | null,
  toDate: Date | null,
) => {
  const { groupId } = useGroup();
  const [{ data, fetching, error }] = useGetDailyDetailByDateGenreIdQuery({
    variables: {
      genreId,
      fromDate,
      toDate,
      groupId,
    },
  });

  const incomeTotal = calcTotal(data, IocomeType.Income);
  const outcomeTotal = calcTotal(data, IocomeType.Outcome);

  return {
    data,
    fetching,
    error,
    incomeTotal,
    outcomeTotal,
  };
};

const calcTotal = (
  data: GetDailyDetailByDateGenreIdQuery | undefined,
  iocomeType: IocomeType,
): number | undefined => {
  return data?.allCategoriesList
    ?.flatMap((category) => {
      return category.dailyDetailsByCategoryIdList
        .filter(
          (dailyDetail) =>
            (dailyDetail.categoryByCategoryId?.genreByGenreId
              ?.iocomeType as IocomeType) === iocomeType,
        )
        .reduce((acc, cur) => acc + Number(cur.amount), 0);
    })
    .reduce((acc: number, cur: number) => acc + cur, 0);
};
