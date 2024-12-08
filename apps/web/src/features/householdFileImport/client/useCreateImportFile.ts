import { FileType } from "../../../provider/file/FileType";
import { LoadFileProps } from "../types";
import { useCreateImportHistory } from "./useCreateImportHistory";
import { useRegisterCreditCard } from "./useRegisterCreditCard";

export const useCreateImportFile = ({
  fileType,
  fileName,
}: {
  fileType: FileType;
  fileName: string;
}) => {
  const { registerImportHistory } = useCreateImportHistory({
    fileType,
    fileName,
  });

  const { registerCreditCard } = useRegisterCreditCard({
    fileType,
  });

  const registerImported = async ({
    withdrawalDate,
    accountId,
    loadData,
  }: {
    withdrawalDate: Date;
    accountId: string;
    loadData: LoadFileProps[];
  }) => {
    const { fileImportId } = await registerImportHistory();
    await registerCreditCard({
      summaryId: fileImportId,
      withdrawalDate,
      accountId,
      loadData,
    });
  };

  return {
    registerImported,
  };
};
