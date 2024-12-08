import {
  ChartDetailTableFilterSettlementDateDocument,
  ChartDetailTableFilterWithdrawalDateDocument,
} from "@v3/graphql/household/type";

import { findUser } from "~/persistence/browser/server/find-user";
import { fetchQuery } from "~/persistence/database/server/fetchQuery";
import { IocomeType } from "../../../domain/model/household/IocomeType";

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

  const { data } = await fetchQuery(query, {
    groupId: group.id,
    fromDate: watchFirstDate,
    toDate: watchLastDate,
  });

  return {
    records: data?.detailView.map((rec) => ({
      id: rec.id!,
      withdrawalDate: rec.withdrawalDate,
      settlementDate: rec.settlementDate,
      amount: rec.amount as number,
      iocomeType: rec.iocomeType as IocomeType,
      accountName: rec.account?.name ?? "",
      genreName: rec.genre?.name ?? "",
      categoryName: rec.category?.name ?? "",
      memo: rec.memo ?? "",
      isDeposit: !!rec.category?.depositCategory,
    })),
  };
};

const getLastDateOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};
