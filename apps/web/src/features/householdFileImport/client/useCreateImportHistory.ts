import { useCreateImportFileHistoryMutation } from "@v3/graphql/household";

import { useGroup } from "~/hooks/group/useGroup";
import { useGenerateId } from "~/hooks/useGenerateId";
import { useUser } from "~/hooks/user/useUser";
import { FileType } from "../../../provider/file/FileType";

export const useCreateImportHistory = ({
  fileType,
  fileName,
}: {
  fileType: FileType;
  fileName: string;
}) => {
  const { generate } = useGenerateId();
  const fileImportId = generate();
  const { userId: importUserId } = useUser();
  const { groupId } = useGroup();

  const [, createImportFileMutation] = useCreateImportFileHistoryMutation();

  const registerImportHistory = async () => {
    await createImportFileMutation({
      id: fileImportId,
      fileType,
      fileName: fileName,
      importUserId,
      importDatetime: new Date(),
      groupId,
    });

    return { fileImportId };
  };

  return {
    registerImportHistory,
  };
};
