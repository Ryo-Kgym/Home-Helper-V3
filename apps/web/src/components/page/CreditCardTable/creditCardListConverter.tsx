/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TableProps } from "@components/atoms/Table";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { IocomeType } from "@domain/model/household/IocomeType";
import { GetCreditCardListQuery } from "@graphql/hasura/generated/hasuraGraphql";

export const creditCardListConverter = ({
  data,
  showDetailPage,
}: {
  data: GetCreditCardListQuery | undefined;
  showDetailPage: (_: string) => void;
}): TableProps[] =>
  data?.allCreditCardSummariesList?.map((creditCard) => ({
    keyPrefix: "creditCard",
    columns: [
      { value: creditCard.withdrawalDate, align: "center" },
      { value: creditCard.creditCard, align: "center" },
      {
        value: creditCard.account?.name,
      },
      {
        value: (
          <FormatPrice
            price={creditCard.totalAmount}
            iocomeType={IocomeType.Outcome}
          />
        ),
        align: "right",
      },
    ],
    onClick: () => {
      showDetailPage(creditCard.id);
    },
  })) ?? [];
