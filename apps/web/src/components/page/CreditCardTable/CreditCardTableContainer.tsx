/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { TableProps } from "@components/atoms/Table";
import { useGetCreditCardListQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { creditCardListConverter } from "./creditCardListConverter";
import { CreditCardTablePresenter } from "./CreditCardTablePresenter";
import { useRouter } from "next/navigation";

export const CreditCardTableContainer = () => {
  const { groupId } = useGroup();
  const { push } = useRouter();

  const [{ data }] = useGetCreditCardListQuery({ variables: { groupId } });

  const showDetailPage = (summaryId: string) => {
    push(`/household/creditCard/${summaryId}`);
  };

  const tableProps: TableProps[] = creditCardListConverter({
    data,
    showDetailPage,
  });

  return <CreditCardTablePresenter tableProps={tableProps} />;
};
