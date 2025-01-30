"use server";

import { YYYY_MM_DD } from "@/type/date/date";

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
  withdrawalDate: YYYY_MM_DD;
  accountId: string;
  loadData: LoadFileProps[];
}) => {
  const { fileImportId } = await registerImportHistory({
    importFileType,
    fileName,
  });

  let count = 0;

  switch (importFileType) {
    case "creditCsv": {
      count = (
        await registerCreditCard({
          summaryId: fileImportId,
          withdrawalDate,
          accountId,
          loadData,
        })
      ).count;
      break;
    }
    case "bankCsv": {
      const results = await Promise.all(
        loadData.map(
          async (data) =>
            await registerDailyDetail({
              ...data,
              date: data.date.toString(),
              accountId,
            }),
        ),
      );

      count = results.length;
      break;
    }
    default: {
      ((_: never) => {
        // noop
      })(importFileType);
    }
  }

  return { count };
};
