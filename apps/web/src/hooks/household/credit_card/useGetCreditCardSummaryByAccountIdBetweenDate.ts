import { useGetCreditCardSummaryByAccountIdBetweenDateQuery } from "@graphql/hasura/generated/hasuraGraphql";

export const useGetCreditCardSummaryByAccountIdBetweenDate = (
  accountId: string,
  fromDate: Date | null,
  toDate: Date | null
) => {
  const [{ data, fetching, error }, refetch] =
    useGetCreditCardSummaryByAccountIdBetweenDateQuery({
      variables: {
        fromDate,
        toDate,
        accountId,
      },
    });

  const incomeTotal = 0;
  const outcomeTotal = data?.allCreditCardSummariesList?.reduce(
    (a, b) => a + Number(b!.totalAmount!),
    0
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
