import {
  ChartDetailTableFilterSettlementDateDocument,
  ChartDetailTableFilterWithdrawalDateDocument,
} from "@v3/graphql/household/type";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";

export const fetchWatchTableData = async ({
  watchFirstDate,
  dateType,
}: {
  watchFirstDate: Date;
  dateType: "withdrawalDate" | "settlementDate";
}) => {
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
      withdrawalDate: rec.withdrawalDate,
      settlementDate: rec.settlementDate,
      amount: rec.amount as number,
      iocomeType: rec.iocomeType as IocomeType,
      accountId: rec.account?.id ?? "",
      accountName: rec.account?.name ?? "",
      genreId: rec.genre?.id ?? "",
      genreName: rec.genre?.name ?? "",
      categoryId: rec.category?.id ?? "",
      categoryName: rec.category?.name ?? "",
      memo: rec.memo ?? "",
      isDeposit: !!rec.category?.depositCategory,
    })),
  };
};

const getLastDateOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};
