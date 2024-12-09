/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { GetCreditCardListQuery } from "@v3/graphql/household";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { TableProps } from "../../atoms/Table";
import { FormatPrice } from "../../molecules/FormatPrice";

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
      { value: creditCard.withdrawalDate as string, align: "center" },
      { value: creditCard.creditCard, align: "center" },
      {
        value: creditCard.account?.name,
      },
      {
        value: (
          <FormatPrice
            price={creditCard.totalAmount as number}
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
