"use server";

import { DailyDetail } from "../../../domain/model/household/DailyDetail";
import { registerDailyDetail } from "../../../useServer/household/daily_detail/registerDailyDetail";
import { modifyDailyDetail } from "./modifyDailyDetail";

export const cutDailyDetail = async ({
  initData,
  cutAfter,
  form,
}: {
  initData: DailyDetail;
  cutAfter: {
    amount: number;
    memo: string;
  };
  form: Omit<DailyDetail, "id" | "iocomeType" | "accountId" | "tags">;
}) => {
  await modifyDailyDetail({
    ...initData,
    ...cutAfter,
  });
  await registerDailyDetail({
    ...form,
    accountId: initData.accountId,
    iocomeType: initData.iocomeType,
  });
};
