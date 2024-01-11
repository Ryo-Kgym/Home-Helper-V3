/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import type { TableProps } from "@components/atoms/Table";
import type { IocomeType } from "@domain/model/household/IocomeType";
import { useRouter } from "next/navigation";
import { useGetCreditCardDetailBySummaryIdQuery } from "@/turbo/graphql/household";
import { FormatPrice } from "@components/molecules/FormatPrice";

import { Presenter_ } from "./Presenter";

type CreditCardDetailTableContainerProps = {
  creditCardSummaryId: string;
};
export const Container_ = ({
  creditCardSummaryId,
}: CreditCardDetailTableContainerProps) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
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
      new Date(data?.creditCardSummary?.withdrawalDate as string) ?? new Date(),
    accountName: data?.creditCardSummary?.account.name ?? "",
    totalAmount: (data?.creditCardSummary?.totalAmount as number) ?? 0,
    count: data?.creditCardSummary?.creditCardDetails.length ?? 0,
  };

  const tableProps: TableProps[] =
    data?.creditCardSummary?.creditCardDetails.map((detail) => ({
      keyPrefix: "creditCardDetail",
      columns: [
        { value: detail.date as string, align: "center" },
        {
          value: detail.category?.genre?.name,
        },
        { value: detail.category?.name },
        {
          value: (
            <FormatPrice
              iocomeType={detail.category?.genre?.iocomeType as IocomeType}
              price={detail.amount as number}
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
