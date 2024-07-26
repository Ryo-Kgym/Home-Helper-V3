/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { useCreateImportHistory } from "@features/householdFileImport/client/useCreateImportHistory";
import { useRegisterCreditCard } from "@features/householdFileImport/client/useRegisterCreditCard";
import { LoadFileProps } from "@features/householdFileImport/types";
import { FileType } from "@provider/file/FileType";

export const useCreateImportFile = ({
  fileType,
  fileName,
  accountId,
  withdrawalDate,
  loadData,
}: {
  fileType: FileType;
  fileName: string;
  accountId: string;
  withdrawalDate: Date;
  loadData: LoadFileProps[];
}) => {
  const { fileImportId, registerImportHistory } = useCreateImportHistory({
    fileType,
    fileName,
  });

  const { registerCreditCard } = useRegisterCreditCard({
    summaryId: fileImportId,
    fileType,
    accountId,
    withdrawalDate,
    loadData,
  });

  const registerImported = async () => {
    try {
      await registerImportHistory();
      await registerCreditCard();
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return {
    registerImported,
  };
};
