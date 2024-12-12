/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { useRouter } from "next/navigation";
import { useGetCreditCardListQuery } from "@v3/graphql/household";

import { TableProps } from "../../../components/atoms/Table";
import { useGroup } from "../../../hooks/group/useGroup";
import { creditCardListConverter } from "./creditCardListConverter";
import { CreditHistoryListPresenter } from "./CreditHistoryListPresenter";

export const CreditHistoryListContainer = () => {
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

  return <CreditHistoryListPresenter tableProps={tableProps} />;
};
