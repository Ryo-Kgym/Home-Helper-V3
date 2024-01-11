import { useGetCategoryTotalByMonthQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useGroup } from "@hooks/group/useGroup";
import { useDate } from "@hooks/date/useDate";

export const useGetCategoryTotalByMonth = (
  fromMonth: Date | null,
  toMonth: Date | null
) => {
  const { groupId } = useGroup();
  const { offsetDate } = useDate();
  const correctedFromMonth = fromMonth ?? new Date();
  const correctedToMonth = toMonth ?? new Date();

  const firstDay = offsetDate(
    new Date(correctedFromMonth.getFullYear(), correctedFromMonth.getMonth(), 1)
  );
  const lastDay = offsetDate(
    new Date(correctedToMonth.getFullYear(), correctedToMonth.getMonth() + 1, 0)
  );

  const [{ data, fetching, error }] = useGetCategoryTotalByMonthQuery({
    variables: {
      fromDate: firstDay.toISOString(),
      toDate: lastDay.toISOString(),
      groupId,
    },
  });

  const incomeTotal = data?.categoryTotalByMonth
    ?.filter((c) => c!.iocomeType === IocomeType.Income)
    .reduce((a, b) => a + Number(b!.total!), 0);

  const outcomeTotal = data?.categoryTotalByMonth
    ?.filter((c) => c!.iocomeType === IocomeType.Outcome)
    .reduce((a, b) => a + Number(b!.total!), 0);

  return {
    data,
    fetching,
    error,
    incomeTotal,
    outcomeTotal,
  };
};
