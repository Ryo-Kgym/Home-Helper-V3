/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { FileType } from "@provider/file/FileType";
import {
  useCreateCreditCardDetailMutation,
  useCreateCreditCardSummaryMutation,
} from "@graphql/hasura/generated/hasuraGraphql";
import { LoadFileProps } from "@components/page/FileImport/loadUploadFile";
import { useGenerateId } from "@hooks/useGenerateId";
import { useGroup } from "@hooks/group/useGroup";
import { useUser } from "@hooks/user/useUser";

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

  const [result, createCreditCardDetailMutation] =
    useCreateCreditCardDetailMutation();

  const summaryVariableList = {
    id: summaryId,
    creditCard: CreditCardMap.get(fileType) || "other",
    accountId: accountId,
    totalAmount: loadData.reduce((acc, cur) => acc + cur.price, 0),
    count: loadData.length,
    withdrawalDate: withdrawalDate,
    groupId,
  };

  const detailVariableList = loadData.map((data, idx) => ({
    id: generate(),
    date: data.date,
    genreId: data.genreId!,
    iocomeType: data.iocomeType!,
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

      detailVariableList.map(async (variable) => {
        await createCreditCardDetailMutation(variable);
        console.debug(result.data?.insertCreditCardDetail);
      });
    } catch (e) {
      console.error(e);
    }
  };

  return { registerCreditCard };
};

const CreditCardMap = new Map<FileType, string>([
  [FileType.AU_PAY_CSV, "AU_PAY_CARD"],
  [FileType.SMBC_CSV, "AMAZON_CARD"],
  [FileType.RAKUTEN_CARD_CSV, "RAKUTEN_CARD"],
]);
