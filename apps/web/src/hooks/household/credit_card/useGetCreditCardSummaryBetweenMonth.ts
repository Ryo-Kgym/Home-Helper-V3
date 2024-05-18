import { useFindUser } from "@persistence/browser/client/useFindUser";
import { useGetCreditCardSummaryByDateQuery } from "@v3/graphql/household";

export const useGetCreditCardSummaryBetweenMonth = (
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

  const [{ data }] = useGetCreditCardSummaryByDateQuery({
    variables: {
      fromDate: firstDay.toISOString(),
      toDate: lastDay.toISOString(),
      groupId: group.id,
    },
  });

  const incomeTotal = 0;
  const outcomeTotal =
    data?.creditCardSummaries?.reduce(
      (a: number, b) => a + Number(b.totalAmount),
      0,
    ) ?? 0;

  return {
    data,
    incomeTotal,
    outcomeTotal,
  };
};
