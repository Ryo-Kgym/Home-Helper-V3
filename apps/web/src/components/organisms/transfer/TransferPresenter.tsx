/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { AmountInput } from "../../molecules/CustomNumberInput/Amount";
import { AccountSelect } from "../../molecules/CustomSelect/Account";
import { MemoTextArea } from "../../molecules/CustomTextArea/Memo";
import { Button } from "../../ui";
import { DatePicker } from "../../ui/date";

export const TransferPresenter = ({
  date,
  setDate,
  sendAccountId,
  setSendAccountId,
  receiveAccountId,
  setReceiveAccountId,
  amount,
  setAmount,
  memo,
  setMemo,
  registerHandler,
  isRegisterable,
  clearHandler,
}: {
  date: Date;
  setDate: (_: Date) => void;
  sendAccountId: string | null;
  setSendAccountId: (_: string | null) => void;
  receiveAccountId: string | null;
  setReceiveAccountId: (_: string | null) => void;
  amount: number | "";
  setAmount: (_: number | "") => void;
  memo: string;
  setMemo: (_: string) => void;
  registerHandler: () => void;
  isRegisterable: boolean;
  clearHandler: () => void;
}) => (
  <div className={"space-y-2"}>
    <DatePicker value={date} onChange={setDate} required defaultValue={date} />
    <div className={"flex items-center justify-items-center space-x-2"}>
      <AccountSelect
        accountId={sendAccountId}
        setAccountId={setSendAccountId}
      />
      <div>{"=>"}</div>
      <AccountSelect
        accountId={receiveAccountId}
        setAccountId={setReceiveAccountId}
      />
    </div>
    <AmountInput value={amount} onChange={setAmount} />
    <MemoTextArea memo={memo} setMemo={setMemo} />
    <div className={"grid grid-cols-2 justify-items-center"}>
      <Button
        colorType={"register"}
        onClick={registerHandler}
        disabled={!isRegisterable}
      />
      <Button colorType={"clear"} onClick={clearHandler} />
    </div>
  </div>
);
