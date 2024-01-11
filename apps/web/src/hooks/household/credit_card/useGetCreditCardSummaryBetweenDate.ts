import { useGetCreditCardSummaryBetweenWithdrawalDateQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";

export const useGetCreditCardSummaryBetweenDate = (
  fromDate: Date | null,
  toDate: Date | null
) => {
  const { groupId } = useGroup();
  const [{ data, fetching, error }] =
    useGetCreditCardSummaryBetweenWithdrawalDateQuery({
      variables: {
        fromDate,
        toDate,
        groupId,
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
    incomeTotal,
    outcomeTotal,
  };
};
