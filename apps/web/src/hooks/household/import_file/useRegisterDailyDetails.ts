/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { LoadFileProps } from "@components/page/FileImport/loadUploadFile";
import { useCreateDailyDetailMutation } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { useGenerateId } from "@hooks/useGenerateId";
import { useUser } from "@hooks/user/useUser";

/**
 * Package Private
 */
export const useRegisterDailyDetails = ({
  accountId,
  loadData,
}: {
  accountId: string;
  loadData: LoadFileProps[];
}) => {
  const { generate } = useGenerateId();
  const { userId } = useUser();
  const { groupId } = useGroup();

  const [, createDailyDetailMutation] = useCreateDailyDetailMutation();

  const createDailyDetailVariableList = loadData.map((data) => ({
    id: generate(),
    date: data.date,
    genreId: data.genreId!,
    iocomeType: data.iocomeType,
    categoryId: data.categoryId!,
    accountId: accountId,
    amount: data.price,
    memo: data.note,
    userId,
    groupId,
  }));

  const registerDailyDetails = async () => {
    try {
      createDailyDetailVariableList.map(
        async (variable) => await createDailyDetailMutation(variable),
      );
    } catch (e) {
      console.error(e);
    }
  };

  return { registerDailyDetails };
};
