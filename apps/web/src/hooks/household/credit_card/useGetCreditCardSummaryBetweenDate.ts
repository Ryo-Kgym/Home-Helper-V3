import { useGroup } from "@hooks/group/useGroup";
import { useGetCreditCardSummaryByDateQuery } from "@v3/graphql/household";

export const useGetCreditCardSummaryBetweenDate = (
  fromDate: Date | null,
  toDate: Date | null,
) => {
  const { groupId } = useGroup();
  const [{ data, fetching, error }] = useGetCreditCardSummaryByDateQuery({
    variables: {
      fromDate,
      toDate,
      groupId,
    },
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
