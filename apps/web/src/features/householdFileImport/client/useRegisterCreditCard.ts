/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { LoadFileProps } from "@features/householdFileImport/types";
import { useGroup } from "@hooks/group/useGroup";
import { useGenerateId } from "@hooks/useGenerateId";
import { useUser } from "@hooks/user/useUser";
import { FileType } from "@provider/file/FileType";
import {
  useCreateCreditCardDetailMutation,
  useCreateCreditCardSummaryMutation,
} from "@v3/graphql/household";

/**
 * Package Private
 */
export const useRegisterCreditCard = ({
  summaryId,
  fileType,
  accountId,
  withdrawalDate,
  loadData,
}: {
  summaryId: string;
  fileType: FileType;
  accountId: string;
  withdrawalDate: Date;
  loadData: LoadFileProps[];
}) => {
  const { generate } = useGenerateId();
  const { userId } = useUser();
  const { groupId } = useGroup();

  const [, createCreditCardSummaryMutation] =
    useCreateCreditCardSummaryMutation();

  const [, createCreditCardDetailMutation] =
    useCreateCreditCardDetailMutation();

  const summaryVariableList = {
    id: summaryId,
    creditCard: fileType,
    accountId: accountId,
    totalAmount: loadData.reduce((acc, cur) => acc + cur.price, 0),
    count: loadData.length,
    withdrawalDate: withdrawalDate,
    groupId,
  };

  const detailVariableList = loadData.map((data) => ({
    id: generate(),
    date: data.date,
    genreId: data.genreId!,
    iocomeType: data.iocomeType,
    categoryId: data.categoryId!,
    amount: data.price,
    memo: data.note,
    summaryId,
    userId,
    groupId,
  }));

  const registerCreditCard = async () => {
    try {
      await createCreditCardSummaryMutation(summaryVariableList);

      await Promise.all(
        detailVariableList.map(async (detail) => {
          await createCreditCardDetailMutation(detail);
        }),
      );
    } catch (e) {
      console.error(e);
    }
  };

  return { registerCreditCard };
};
