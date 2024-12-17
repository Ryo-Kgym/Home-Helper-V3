"use server";

import { LoadFileProps } from "../types";
import { ImportFileType } from "../types/importFileType";
import { registerCreditCard } from "./registerCreditCard";
import { registerImportHistory } from "./registerImportHistory";

export const registerImported = async ({
  importFileType,
  fileName,
  withdrawalDate,
  accountId,
  loadData,
}: {
  importFileType: ImportFileType;
  fileName: string;
  withdrawalDate: Date;
  accountId: string;
  loadData: LoadFileProps[];
}) => {
  const { fileImportId } = await registerImportHistory({
    importFileType,
    fileName,
  });
  await registerCreditCard({
    summaryId: fileImportId,
    withdrawalDate,
    accountId,
    loadData,
  });
};
