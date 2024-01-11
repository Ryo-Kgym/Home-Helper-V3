/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { DailyDetail } from "@domain/model/household/DailyDetail";
import { CutDetailPresenter } from "@components/organisms/update_detail/cut/CutDetailPresenter";
import { useState } from "react";
import { useCutDetail } from "@hooks/household/daily_detail/useCutDetail";
import { errorPopup, successPopup } from "@function/successPopup";

export const CutDetailContainer = ({
  initData,
  onClose,
}: {
  initData: DailyDetail;
  onClose: () => void;
}) => {
  const [detailDate, setDetailDate] = useState<Date>(initData?.date!);
  const [genreId, setGenreId] = useState<string | null>(initData?.genreId);
  const [categoryId, setCategoryId] = useState<string | null>(
    initData?.categoryId,
  );
  const [accountId, setAccountId] = useState<string | null>(initData.accountId);
  const [amount, setAmount] = useState<number | "">(0);
  const [newMemo, setNewMemo] = useState<string>("");
  const [cutAfterMemo, setCutAfterMemo] = useState<string>(
    initData?.memo ?? "",
  );
  const cutAfterAmount = Number(initData?.amount!) - Number(amount);

  const updateButtonDisabled =
    amount === 0 || amount === "" || cutAfterAmount < 0;

  const { cutDetailHandler } = useCutDetail({
    origin: {
      initData,
      deductedAmount: cutAfterAmount,
      rewrittenMemo: cutAfterMemo,
    },
    newDetail: {
      detailDate: detailDate!,
      genreId: genreId!,
      categoryId: categoryId!,
      accountId: accountId!,
      amount: Number(amount!),
      memo: newMemo,
    },
  });

  const updateHandler = async () => {
    try {
      await cutDetailHandler();
      successPopup("更新しました。");
      onClose();
    } catch (e) {
      console.error(e);
      errorPopup("更新に失敗しました。");
    }
  };

  const clearHandler = () => {
    setDetailDate(initData?.date!);
    setGenreId(initData?.genreId);
    setCategoryId(initData?.categoryId);
    setAccountId(initData.accountId);
    setAmount(0);
    setNewMemo("");
    setCutAfterMemo(initData?.memo ?? "");
  };

  return (
    <CutDetailPresenter
      detailDate={detailDate}
      defaultDetailDate={initData?.date!}
      setDetailDate={setDetailDate}
      iocomeType={initData?.iocomeType!}
      genreId={genreId}
      defaultGenreId={initData?.genreId}
      changeGenreIdHandler={setGenreId}
      categoryId={categoryId}
      defaultCategoryId={initData?.categoryId}
      changeCategoryIdHandler={setCategoryId}
      defaultAccountId={initData?.accountId}
      amount={amount}
      cutAfterAmount={cutAfterAmount}
      defaultAmount={initData?.amount}
      changeAmountHandler={setAmount}
      defaultMemo={initData?.memo ?? ""}
      newMemo={newMemo}
      changeNewMemoHandler={setNewMemo}
      cutAfterMemo={cutAfterMemo}
      changeCutAfterMemoHandler={setCutAfterMemo}
      updateHandler={updateHandler}
      clearHandler={clearHandler}
      updateButtonDisabled={updateButtonDisabled}
    />
  );
};
