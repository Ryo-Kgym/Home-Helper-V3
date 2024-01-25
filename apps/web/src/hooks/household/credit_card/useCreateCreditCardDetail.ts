/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import type { IocomeType } from "@domain/model/household/IocomeType";
import { useGroup } from "@hooks/group/useGroup";
import { useUpdateCreditCardSummaryTotal } from "@hooks/household/credit_card/useUpdateCreditCardSummaryTotal";
import { useGenerateId } from "@hooks/useGenerateId";
import { useUser } from "@hooks/user/useUser";
import { useCreateCreditCardDetailMutation } from "@v3/graphql/household";

export const useCreateCreditCardDetail = ({
  summaryId,
}: {
  summaryId: string;
}) => {
  const { generate } = useGenerateId();
  const { userId } = useUser();
  const { groupId } = useGroup();
  const [, createCreditCardDetailMutation] =
    useCreateCreditCardDetailMutation();
  const { updateTotal } = useUpdateCreditCardSummaryTotal({ summaryId });

  const createDetail = async ({
    date,
    iocomeType,
    genreId,
    categoryId,
    amount,
    memo,
  }: {
    date: Date;
    iocomeType: IocomeType;
    genreId: string;
    categoryId: string;
    amount: number;
    memo: string;
  }) => {
    try {
      await createCreditCardDetailMutation({
        id: generate(),
        date,
        genreId,
        iocomeType,
        categoryId,
        amount,
        memo,
        summaryId,
        userId,
        groupId,
      });
      await updateTotal();
    } catch (e) {
      console.error(e);
    }
  };

  return { createDetail };
};
