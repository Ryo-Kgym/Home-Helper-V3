/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { useGetCreditCardDetailBySummaryIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useState } from "react";
import { Presenter_ } from "./Presenter";
import { useCreateCreditCardDetail } from "@hooks/household/credit_card/useCreateCreditCardDetail";
import { IocomeType } from "@domain/model/household/IocomeType";
import { errorPopup, successPopup } from "@function/successPopup";

export const Container_ = ({ summaryId }: { summaryId: string }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [genreId, setGenreId] = useState<string | null>("");
  const [categoryId, setCategoryId] = useState<string | null>("");
  const [amount, setAmount] = useState<number | "">("");
  const [memo, setMemo] = useState<string>("");

  const [{ data }] = useGetCreditCardDetailBySummaryIdQuery({
    variables: {
      id: summaryId,
    },
  });

  const { createDetail } = useCreateCreditCardDetail({ summaryId });

  const registerHandler = async () => {
    if (!registerable) {
      return;
    }
    try {
      await createDetail({
        date,
        iocomeType: IocomeType.Outcome,
        genreId,
        categoryId,
        amount,
        memo,
      });
      successPopup("登録しました");
      clearInput();
    } catch (e) {
      console.error(e);
      errorPopup("登録に失敗しました");
    }
  };

  const registerable = genreId !== null && categoryId !== null && amount !== "";

  const clearInput = () => {
    setDate(new Date());
    setGenreId("");
    setCategoryId("");
    setAmount("");
    setMemo("");
  };

  return (
    <Presenter_
      date={date}
      setDate={setDate}
      genreId={genreId}
      setGenreId={setGenreId}
      categoryId={categoryId}
      setCategoryId={setCategoryId}
      amount={amount}
      setAmount={setAmount}
      memo={memo}
      setMemo={setMemo}
      accountId={data?.creditCardSummary?.account.id ?? ""}
      registerHandler={registerHandler}
      registerable={registerable}
    />
  );
};
