/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useEffect, useState } from "react";
import { ChangeDetailPresenter } from "./ChangeDetailPresenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useUpdateDailyDetailBySerialNo } from "@hooks/household/daily_detail/useUpdateDailyDetailBySerialNo";
import { useDeleteDailyDetailBySerialNo } from "@hooks/household/daily_detail/useDeleteDailyDetailBySerialNo";
import { DailyDetail } from "@domain/model/household/DailyDetail";

export const ChangeDetailContainer = ({
  initData,
  onClose,
}: {
  initData: DailyDetail | null;
  onClose: () => void;
}) => {
  const [date, setDate] = useState<Date | null>(null);
  const [iocomeType, setIocomeType] = useState<IocomeType>(IocomeType.Income);
  const [genreId, setGenreId] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | "">("");
  const [memo, setMemo] = useState<string>("");

  const { updateHandler } = useUpdateDailyDetailBySerialNo({
    id: initData?.id!,
    date: date!,
    genreId: genreId!,
    iocomeType: iocomeType,
    categoryId: categoryId!,
    accountId: accountId!,
    amount: Number(amount),
    memo: memo,
  });
  const { deleteHandler } = useDeleteDailyDetailBySerialNo({
    id: initData?.id!,
  });

  const resetClickHandler = () => {
    setDate(initData?.date!);
    setIocomeType(initData?.iocomeType!);
    setGenreId(initData?.genreId!);
    setCategoryId(initData?.categoryId!);
    setAccountId(initData?.accountId!);
    setAmount(initData?.amount!);
    setMemo(initData?.memo!);
  };

  useEffect(resetClickHandler, [initData]);

  return (
    <ChangeDetailPresenter
      date={date}
      setDate={setDate}
      iocomeType={iocomeType}
      changeIocomeTypeHandler={(value: IocomeType) => {
        setIocomeType(value);
        setGenreId(initData?.genreId ?? null);
        setCategoryId(initData?.categoryId ?? null);
      }}
      genreId={genreId}
      changeGenreIdHandler={(value: string | null) => {
        setGenreId(value);
        setCategoryId(initData?.categoryId ?? null);
      }}
      categoryId={categoryId}
      changeCategoryIdHandler={setCategoryId}
      accountId={accountId}
      changeAccountIdHandler={setAccountId}
      amount={amount}
      changeAmountHandler={setAmount}
      memo={memo ?? ""}
      changeMemoHandler={setMemo}
      resetClickHandler={resetClickHandler}
      updateClickHandler={async () => {
        await updateHandler();
        onClose();
      }}
      deleteClickHandler={() => {
        deleteHandler();
        onClose();
      }}
    />
  );
};
