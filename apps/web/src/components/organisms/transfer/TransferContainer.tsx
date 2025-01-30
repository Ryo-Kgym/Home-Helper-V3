"use client";

import { useState } from "react";
import { YYYYmmDD } from "@/type/date/date";

import { errorPopup, successPopup } from "../../../function/successPopup";
import { registerTransfer } from "../../../hooks/household/transfer/registerTransfer";
import { TransferPresenter } from "./TransferPresenter";

export const TransferContainer = ({ date }: { date: Date }) => {
  const [registerDate, setRegisterDate] = useState<Date>(date);
  const [sendAccountId, setSendAccountId] = useState<string>("");
  const [receiveAccountId, setReceiveAccountId] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [memo, setMemo] = useState("");
  const isRegisterable: boolean =
    sendAccountId !== receiveAccountId &&
    sendAccountId !== null &&
    receiveAccountId !== null &&
    amount !== 0;

  const registerHandler = async () => {
    try {
      await registerTransfer({
        date: YYYYmmDD.valueOf(registerDate),
        sendAccountId: sendAccountId,
        receiveAccountId: receiveAccountId,
        amount: amount,
        memo: memo,
      });
      clearHandler();
      successPopup("振替を登録しました。");
    } catch (e) {
      errorPopup("振替の登録に失敗しました。");
    }
  };

  const clearHandler = () => {
    setRegisterDate(date);
    setSendAccountId("");
    setReceiveAccountId("");
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
