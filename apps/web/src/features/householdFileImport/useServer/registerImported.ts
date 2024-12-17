"use server";

import { registerDailyDetail } from "../../../useServer/household/daily_detail/registerDailyDetail";
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

  switch (importFileType) {
    case "creditCsv": {
      await registerCreditCard({
        summaryId: fileImportId,
        withdrawalDate,
        accountId,
        loadData,
      });
      break;
    }
    case "bankCsv": {
      await Promise.all(
        loadData.map(
          async (data) =>
            await registerDailyDetail({
              ...data,
              accountId,
            }),
        ),
      );

      break;
    }
    default: {
      ((_: never) => {
        // noop
      })(importFileType);
    }
  }
};
