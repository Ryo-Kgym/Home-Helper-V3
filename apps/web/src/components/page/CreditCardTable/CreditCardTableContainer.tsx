/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import type { TableProps } from "@components/atoms/Table";
import { useRouter } from "next/navigation";
import { useGetCreditCardListQuery } from "@/turbo/graphql/household";
import { useGroup } from "@hooks/group/useGroup";

import { creditCardListConverter } from "./creditCardListConverter";
import { CreditCardTablePresenter } from "./CreditCardTablePresenter";

export const CreditCardTableContainer = () => {
  const { groupId } = useGroup();
  // eslint-disable-next-line @typescript-eslint/unbound-method
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
