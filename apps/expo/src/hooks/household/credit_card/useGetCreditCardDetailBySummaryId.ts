import { useGetCreditCardDetailBySummaryIdQuery } from "@v3/graphql/household";

import type { CreditCardDetail } from "~/hooks/household/credit_card/credit-card-type";
import type { IocomeType } from "~/types/iocome-type";

export const useGetCreditCardDetailBySummaryId = ({
  summaryId,
}: {
  summaryId: string;
}) => {
  const [{ data }] = useGetCreditCardDetailBySummaryIdQuery({
    variables: {
      id: summaryId,
    },
  });

  const creditCardDetailList: CreditCardDetail[] =
    data?.creditCardSummary?.creditCardDetails.map((d) => ({
      id: d.id,
      date: new Date(d.date ?? 0) ?? new Date(),
      genre: {
        id: d.category.genre.id,
        name: d.category.genre.name,
        iocomeType: d.category.genre.iocomeType as IocomeType,
      },
      category: {
        id: d.category.id,
        name: d.category.name,
      },
      account: {
        id: data?.creditCardSummary?.account.id ?? "",
        name: data?.creditCardSummary?.account.name ?? "",
      },
      amount: d.amount as number,
      memo: d.memo ?? null,
    })) ?? [];

  return { creditCardDetailList };
};
