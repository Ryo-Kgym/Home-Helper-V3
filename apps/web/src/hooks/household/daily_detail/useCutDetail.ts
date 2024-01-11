/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { DailyDetail } from "@domain/model/household/DailyDetail";
import { useUpdateDailyDetailBySerialNo } from "@hooks/household/daily_detail/useUpdateDailyDetailBySerialNo";
import { useRegisterDailyDetail } from "@hooks/household/daily_detail/useRegisterDailyDetail";

export const useCutDetail = ({
  origin,
  newDetail,
}: {
  origin: {
    initData: DailyDetail;
    deductedAmount: number;
    rewrittenMemo: string;
  };
  newDetail: {
    detailDate: Date;
    genreId: string;
    categoryId: string;
    accountId: string;
    amount: number;
    memo: string;
  };
}) => {
  const { updateHandler } = useUpdateDailyDetailBySerialNo({
    id: origin.initData.id!,
    date: origin.initData.date!,
    genreId: origin.initData.genreId!,
    iocomeType: origin.initData.iocomeType!,
    categoryId: origin.initData.categoryId!,
    accountId: origin.initData.accountId!,
    amount: origin.deductedAmount,
    memo: origin.rewrittenMemo,
  });
  const { registerHandler } = useRegisterDailyDetail({
    date: newDetail.detailDate,
    genreId: newDetail.genreId,
    iocomeType: origin.initData.iocomeType!,
    categoryId: newDetail.categoryId,
    accountId: newDetail.accountId,
    amount: newDetail.amount,
    memo: newDetail.memo,
  });

  const cutDetailHandler = async () => {
    await updateHandler();
    await registerHandler();
  };

  return {
    cutDetailHandler,
  };
};
