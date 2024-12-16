import { GetCreditCardDetailBySummaryIdDocument } from "@v3/graphql/household/type";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { fetchQuery } from "../../../persistence/database/server/fetchQuery";
import { CreditDetailListClient } from "./CreditDetailListClient";

export const CreditDetailListServer = async ({
  creditCardSummaryId,
}: {
  creditCardSummaryId: string;
}) => {
  const { data } = await fetchQuery(GetCreditCardDetailBySummaryIdDocument, {
    id: creditCardSummaryId,
  });

  if (!data?.creditCardSummary) {
    throw new Error("creditCardSummary not found");
  }

  const summary = {
    id: data.creditCardSummary.id,
    creditCard: data.creditCardSummary.creditCard,
    withdrawalDate: new Date(data.creditCardSummary.withdrawalDate),
    accountId: data.creditCardSummary.account.id,
    totalAmount: data.creditCardSummary.totalAmount as number,
    count: data.creditCardSummary.creditCardDetails.length,
  };

  const details =
    data.creditCardSummary.creditCardDetails.map((d) => ({
      id: d.id,
      date: d.date,
      genreName: d.genre.name,
      categoryName: d.category.name,
      iocomeType: d.genre.iocomeType as IocomeType,
      amount: d.amount,
      memo: d.memo ?? "",
      isExpense: d.businessOptions?.isExpense ?? false,
    })) ?? [];

  return (
    <CreditDetailListClient
      creditCardSummaryId={creditCardSummaryId}
      summary={summary}
      details={details}
    />
  );
};
