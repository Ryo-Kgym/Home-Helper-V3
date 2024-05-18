import { IocomeType } from "@domain/model/household/IocomeType";
import { useFindUser } from "@persistence/browser/client/useFindUser";
import { useGetCategoryTotalByMonthQuery } from "@v3/graphql/household";

export const useGetCategoryTotalByMonth = (
  fromMonth: Date | null,
  toMonth: Date | null,
) => {
  const { group } = useFindUser();
  const correctedFromMonth = fromMonth ?? new Date();
  const correctedToMonth = toMonth ?? new Date();

  const firstDay = new Date(
    correctedFromMonth.getFullYear(),
    correctedFromMonth.getMonth(),
    1,
  );
  const lastDay = new Date(
    correctedToMonth.getFullYear(),
    correctedToMonth.getMonth() + 1,
    0,
  );

  const [{ data }] = useGetCategoryTotalByMonthQuery({
    variables: {
      fromDate: firstDay.toISOString(),
      toDate: lastDay.toISOString(),
      groupId: group.id,
    },
  });

  const incomeTotal = data?.categoryTotalByMonth
    ?.filter((c) => c.iocomeType === IocomeType.Income)
    .reduce((a, b) => a + Number(b.total), 0);

  const outcomeTotal = data?.categoryTotalByMonth
    ?.filter((c) => c.iocomeType === IocomeType.Outcome)
    .reduce((a, b) => a + Number(b.total), 0);

  return {
    data,
    incomeTotal,
    outcomeTotal,
  };
};
