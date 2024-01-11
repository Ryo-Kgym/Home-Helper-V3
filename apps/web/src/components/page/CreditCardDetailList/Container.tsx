/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { TableProps } from "@components/atoms/Table";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { useGetCreditCardDetailBySummaryIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { Presenter_ } from "./Presenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useRouter } from "next/navigation";

type CreditCardDetailTableContainerProps = {
  creditCardSummaryId: string;
};
export const Container_ = ({
  creditCardSummaryId,
}: CreditCardDetailTableContainerProps) => {
  const { push } = useRouter();

  const [{ data }] = useGetCreditCardDetailBySummaryIdQuery({
    variables: {
      id: creditCardSummaryId,
    },
  });

  const summary = {
    id: data?.creditCardSummary?.id ?? "",
    creditCard: data?.creditCardSummary?.creditCard ?? "",
    withdrawalDate:
      new Date(data?.creditCardSummary?.withdrawalDate) ?? new Date(),
    accountName: data?.creditCardSummary?.account.name ?? "",
    totalAmount: data?.creditCardSummary?.totalAmount ?? 0,
    count: data?.creditCardSummary?.creditCardDetails.length ?? 0,
  };

  const tableProps: TableProps[] =
    data?.creditCardSummary?.creditCardDetails.map((detail) => ({
      keyPrefix: "creditCardDetail",
      columns: [
        { value: detail.date, align: "center" },
        {
          value: detail.category?.genre?.name,
        },
        { value: detail.category?.name },
        {
          value: (
            <FormatPrice
              iocomeType={detail.category?.genre?.iocomeType! as IocomeType}
              price={detail.amount}
            />
          ),
          align: "right",
        },
        { value: detail.memo },
      ],
      onClick: () =>
        push(`/household/creditCard/${creditCardSummaryId}/edit/${detail.id}`),
    })) ?? [];

  return (
    <Presenter_
      summary={summary}
      tableProps={tableProps}
      addHandler={() =>
        push(`/household/creditCard/${creditCardSummaryId}/add`)
      }
      backHandler={() => push(`/household/creditCard`)}
    />
  );
};
