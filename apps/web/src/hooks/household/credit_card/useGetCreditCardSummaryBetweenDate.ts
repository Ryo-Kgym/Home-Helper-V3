import { useFindUser } from "@persistence/browser/client/useFindUser";
import { useGetCreditCardSummaryByDateQuery } from "@v3/graphql/household";

export const useGetCreditCardSummaryBetweenDate = (
  fromDate: Date | null,
  toDate: Date | null,
) => {
  const { group } = useFindUser();
  const [{ data, fetching, error }] = useGetCreditCardSummaryByDateQuery({
    variables: {
      fromDate: fromDate ? fromDate.toISOString().slice(0, 10) : null,
      toDate: toDate ? toDate.toISOString().slice(0, 10) : null,
      groupId: group.id,
    },
    pause: !fromDate || !toDate,
    requestPolicy: "cache-first",
  });

  const incomeTotal = 0;
  const outcomeTotal = data?.creditCardSummaries?.reduce(
    (a: number, b) => a + Number(b.totalAmount),
    0,
  );

  return {
    data,
    fetching,
    error,
    incomeTotal,
    outcomeTotal,
  };
};
