/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { useRouter } from "next/navigation";
import { useGetCreditCardListQuery } from "@v3/graphql/household";

import { useGroup } from "../../../hooks/group/useGroup";
import { TableProps } from "../../atoms/Table";
import { creditCardListConverter } from "./creditCardListConverter";
import { CreditCardTablePresenter } from "./CreditCardTablePresenter";

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
