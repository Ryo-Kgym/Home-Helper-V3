/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useCreateImportFileHistoryMutation } from "@graphql/hasura/generated/hasuraGraphql";
import { useGenerateId } from "@hooks/useGenerateId";
import { useUser } from "@hooks/user/useUser";
import { useDate } from "@hooks/date/useDate";
import { useGroup } from "@hooks/group/useGroup";
import { FileType } from "@provider/file/FileType";

export const useCreateImportHistory = ({
  fileType,
  fileName,
}: {
  fileType: FileType;
  fileName: string;
}) => {
  const { generate } = useGenerateId();
  const fileImportId = generate();
  const { userId } = useUser();
  const { groupId } = useGroup();
  const { getNow } = useDate();

  const [, createImportFileMutation] = useCreateImportFileHistoryMutation();
  const createImportFileVariables = {
    id: fileImportId,
    fileType: fileType,
    fileName: fileName,
    importUserId: userId,
    importDatetime: getNow(),
    groupId,
  };

  const registerImportHistory = async () => {
    try {
      await createImportFileMutation(createImportFileVariables);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    fileImportId,
    registerImportHistory,
  };
};
