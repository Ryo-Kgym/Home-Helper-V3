import {
  ChartDetailTableFilterSettlementDateDocument,
  ChartDetailTableFilterWithdrawalDateDocument,
} from "@v3/graphql/household/schema/query/v5/chartDetailTable.generated";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import { ChartDetailTableRow } from "../types/chartDetailTableRow";

export const fetchWatchTableData = async ({
  watchFirstDate,
  dateType,
}: {
  watchFirstDate: Date;
  dateType: "withdrawalDate" | "settlementDate";
}): Promise<{ records: ChartDetailTableRow[] }> => {
  // watchFirstDate から月末日を生成する
  const watchLastDate = getLastDateOfMonth(watchFirstDate);

  const { group } = await findUser();

  const query =
    dateType === "withdrawalDate"
      ? ChartDetailTableFilterWithdrawalDateDocument
      : ChartDetailTableFilterSettlementDateDocument;

  const { data } = await execQuery(query, {
    groupId: group.id,
    fromDate: watchFirstDate,
    toDate: watchLastDate,
  });

  return {
    records: data?.detailView.map((rec) => ({
      id: rec.id!,
      type: rec.type!,
      withdrawalDate: rec.withdrawalDate!,
      settlementDate: rec.settlementDate!,
      amount: rec.amount!,
      iocomeType: rec.iocomeType as IocomeType,
      accountId: rec.account?.id ?? "",
      accountName: rec.account?.name ?? "",
      genreId: rec.genre?.id ?? "",
      genreName: rec.genre?.name ?? "",
      categoryId: rec.category?.id ?? "",
      categoryName: rec.category?.name ?? "",
      memo: rec.memo ?? "",
      isDeposit: !!rec.category?.depositCategory,
      tags: rec.tags.map((tag) => ({
        label: tag.tag.name,
        value: tag.tag.id,
        colorCode: tag.tag.colorCode,
      })),
    })),
  };
};

const getLastDateOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};
