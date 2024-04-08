/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { useGroup } from "@hooks/group/useGroup";
import { useGetCreditCardListQuery } from "@v3/graphql/household";
import { useRouter } from "next/navigation";

import { creditCardListConverter } from "./creditCardListConverter";
import { CreditCardTablePresenter } from "./CreditCardTablePresenter";

import type { TableProps } from "@components/atoms/Table";

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
