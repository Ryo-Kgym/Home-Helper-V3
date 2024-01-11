import { useGetCreditCardSummaryBetweenWithdrawalDateQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";

export const useGetCreditCardSummaryBetweenMonth = (
  fromMonth: Date | null,
  toMonth: Date | null
) => {
  const { groupId } = useGroup();
  const correctedFromMonth = fromMonth ?? new Date();
  const correctedToMonth = toMonth ?? new Date();

  const firstDay = new Date(
    correctedFromMonth.getFullYear(),
    correctedFromMonth.getMonth(),
    1
  );
  const lastDay = new Date(
    correctedToMonth.getFullYear(),
    correctedToMonth.getMonth() + 1,
    0
  );

  const [{ data, fetching, error }, refetch] =
    useGetCreditCardSummaryBetweenWithdrawalDateQuery({
      variables: {
        fromDate: firstDay.toISOString(),
        toDate: lastDay.toISOString(),
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
    refetch: () => {
      refetch({ requestPolicy: "network-only" });
    },
    incomeTotal,
    outcomeTotal,
  };
};
