import { useGetCreditCardSummaryByAccountIdQuery } from "@v3/graphql/household";

export const useGetCreditCardSummaryByAccountIdBetweenDate = (
  accountId: string,
  fromDate: Date | null,
  toDate: Date | null,
) => {
  const [{ data, fetching, error }, refetch] =
    useGetCreditCardSummaryByAccountIdQuery({
      variables: {
        fromDate,
        toDate,
        accountId,
      },
      pause: !accountId || !fromDate || !toDate,
    });

  const incomeTotal = 0;
  const outcomeTotal = data?.creditCardSummaries.reduce(
    (a: number, b) => a + Number(b.totalAmount),
    0,
  );

  return {
    data,
    fetching,
    error,
    refetch: () => {
      refetch({ requestPolicy: "network-only" });
    },
    incomeTotal,
    outcomeTotal,
  };
};
