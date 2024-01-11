/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { TransferPresenter } from "@components/organisms/transfer/TransferPresenter";
import { useState } from "react";
import { useRegisterTransfer } from "@hooks/household/transfer/useRegisterTransfer";
import { successPopup, errorPopup } from "@function/successPopup";

export const TransferContainer = ({ date }: { date: Date }) => {
  const [registerDate, setRegisterDate] = useState<Date>(date);
  const [sendAccountId, setSendAccountId] = useState<string | null>(null);
  const [receiveAccountId, setReceiveAccountId] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | "">(0);
  const [memo, setMemo] = useState("");
  const isRegisterable: boolean =
    sendAccountId !== receiveAccountId &&
    sendAccountId !== null &&
    receiveAccountId !== null &&
    amount !== 0;

  const { registerTransfer } = useRegisterTransfer({
    date: registerDate,
    sendAccountId: sendAccountId!!,
    receiveAccountId: receiveAccountId!!,
    amount: amount as number,
    memo: memo,
  });

  const registerHandler = async () => {
    try {
      await registerTransfer();
      clearHandler();
      successPopup("振替を登録しました。");
    } catch (e) {
      errorPopup("振替の登録に失敗しました。");
    }
  };

  const clearHandler = () => {
    setRegisterDate(date);
    setSendAccountId(null);
    setReceiveAccountId(null);
    setAmount(0);
    setMemo("");
  };

  return (
    <TransferPresenter
      date={registerDate}
      setDate={setRegisterDate}
      sendAccountId={sendAccountId}
      setSendAccountId={setSendAccountId}
      receiveAccountId={receiveAccountId}
      setReceiveAccountId={setReceiveAccountId}
      amount={amount}
      setAmount={setAmount}
      memo={memo}
      setMemo={setMemo}
      registerHandler={registerHandler}
      clearHandler={clearHandler}
      isRegisterable={isRegisterable}
    />
  );
};
