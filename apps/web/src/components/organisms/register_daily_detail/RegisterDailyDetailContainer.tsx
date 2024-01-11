/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { useState } from "react";
import { RegisterDailyDetailPresenter } from "./RegisterDailyDetailPresenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useRegisterDailyDetail } from "@hooks/household/daily_detail/useRegisterDailyDetail";
import { errorPopup, successPopup } from "@function/successPopup";

export const RegisterDailyDetailContainer = ({ date }: { date: Date }) => {
  const [registerDate, setRegisterDate] = useState<Date>(date);
  const [iocomeType, setIocomeType] = useState<IocomeType>(IocomeType.Income);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [genreId, setGenreId] = useState<string | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | "">("");
  const [memo, setMemo] = useState("");

  const allClear = () => {
    setIocomeType(IocomeType.Income);
    setCategoryId(null);
    setGenreId(null);
    setAccountId(null);
    setAmount("");
    setMemo("");
  };

  const anyFieldIsInvalid = () => {
    const genreIdIsInvalid = genreId === null || genreId === "";
    const categoryIdIsInvalid = categoryId === null || categoryId === "";
    const accountIdIsInvalid = accountId === null || accountId === "";
    const amountIsInvalid = amount === undefined || amount === null;

    return (
      genreIdIsInvalid ||
      categoryIdIsInvalid ||
      accountIdIsInvalid ||
      amountIsInvalid
    );
  };

  const { registerHandler } = useRegisterDailyDetail({
    date: registerDate,
    genreId: genreId!!,
    iocomeType: iocomeType,
    categoryId: categoryId!!,
    accountId: accountId!!,
    amount: amount as number,
    memo: memo,
  });

  const registerClickHandler = async () => {
    if (anyFieldIsInvalid()) {
      errorPopup("入力に不備があります");
      return;
    }
    try {
      await registerHandler();
      setAmount("");
      setMemo("");
      successPopup("登録しました");
    } catch (e) {
      console.error(e);
      errorPopup("登録に失敗しました");
    }
  };

  return (
    <RegisterDailyDetailPresenter
      date={registerDate}
      setDate={setRegisterDate}
      iocomeType={iocomeType}
      changeIocomeTypeHandler={(value: IocomeType) => {
        setIocomeType(value);
        setGenreId(null);
        setCategoryId(null);
      }}
      genreId={genreId}
      changeGenreIdHandler={(value: string | null) => {
        setGenreId(value);
        setCategoryId(null);
      }}
      categoryId={categoryId}
      changeCategoryIdHandler={setCategoryId}
      accountId={accountId}
      changeAccountIdHandler={setAccountId}
      amount={amount}
      changeAmountHandler={setAmount}
      memo={memo}
      changeMemoHandler={setMemo}
      clearClickHandler={allClear}
      registerClickHandler={registerClickHandler}
    />
  );
};
