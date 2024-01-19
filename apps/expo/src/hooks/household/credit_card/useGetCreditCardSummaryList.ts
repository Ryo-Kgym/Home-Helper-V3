import { useGetCreditCardSummaryBetweenWithdrawalDateQuery } from "@/turbo/graphql/household";

import type { CreditCardSummary } from "~/hooks/household/credit_card/credit-card-type";
import type { CreditCard } from "~/types/credit-card";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import {
  getCreditCardGenreName,
  getCreditCardIocomeType,
  getCreditCardName,
} from "~/hooks/household/credit_card/get-label";

export const useGetCreditCardSummaryList = ({
  fromDate,
  toDate,
}: {
  fromDate: Date;
  toDate: Date;
}) => {
  const { groupId } = useSaveGroupId();

  const [{ data, fetching: loading }] =
    useGetCreditCardSummaryBetweenWithdrawalDateQuery({
      variables: {
        groupId,
        fromDate,
        toDate,
      },
    });

  const creditCardSummaryList: CreditCardSummary[] =
    data?.allCreditCardSummariesList.map((c) => ({
      id: c.id,
      withdrawalDate: c.withdrawalDate ? new Date(c.withdrawalDate) : undefined,
      genre: {
        name: getCreditCardGenreName(),
        iocomeType: getCreditCardIocomeType(),
      },
      category: {
        name: getCreditCardName(c.creditCard as CreditCard),
      },
      account: {
        id: c.accountByAccountId.accountId,
        name: c.accountByAccountId.accountName,
      },
      total: c.totalAmount as number,
    })) ?? [];

  return { creditCardSummaryList, loading };
};
