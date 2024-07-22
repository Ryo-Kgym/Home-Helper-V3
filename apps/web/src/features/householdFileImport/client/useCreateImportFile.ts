/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { useCreateImportHistory } from "@features/householdFileImport/client/useCreateImportHistory";
import { useRegisterCreditCard } from "@features/householdFileImport/client/useRegisterCreditCard";
import { useRegisterDailyDetails } from "@features/householdFileImport/client/useRegisterDailyDetails";
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

  const { registerDailyDetails } = useRegisterDailyDetails({
    accountId,
    loadData,
  });

  const registerImported = async () => {
    try {
      await registerImportHistory();

      if (isCreditCard(fileType)) {
        await registerCreditCard();
      } else {
        await registerDailyDetails();
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return {
    registerImported,
  };
};
const isCreditCard = (fileType: FileType) =>
  fileType === FileType.AU_PAY_CSV ||
  fileType === FileType.SMBC_CSV ||
  fileType === FileType.RAKUTEN_CARD_CSV;
