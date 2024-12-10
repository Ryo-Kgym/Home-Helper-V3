/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { AmountInput } from "../../molecules/CustomNumberInput/Amount";
import { AccountSelect } from "../../molecules/CustomSelect/Account";
import { CategorySelect } from "../../molecules/CustomSelect/Category";
import { GenreSelect } from "../../molecules/CustomSelect/Genre";
import { MemoTextArea } from "../../molecules/CustomTextArea/Memo";
import { Button } from "../../ui";
import { DatePicker } from "../../ui/date";

export const Presenter_ = ({
  date,
  setDate,
  genreId,
  setGenreId,
  categoryId,
  setCategoryId,
  amount,
  setAmount,
  memo,
  setMemo,
  accountId,
  registerHandler,
  registerable,
}: {
  date: Date;
  setDate: (date: Date) => void;
  genreId: string | null;
  setGenreId: (genreId: string | null) => void;
  categoryId: string | null;
  setCategoryId: (categoryId: string | null) => void;
  amount: number | "";
  setAmount: (amount: number | "") => void;
  memo: string;
  setMemo: (memo: string) => void;
  accountId: string;
  registerHandler: () => void;
  registerable: boolean;
}) => (
  <div className={"space-y-3"}>
    <DatePicker value={date} onChange={setDate} />
    <GenreSelect
      genreId={genreId}
      setGenreId={setGenreId}
      iocomeType={IocomeType.Outcome}
    />
    <CategorySelect
      categoryId={categoryId}
      setCategoryId={setCategoryId}
      genreId={genreId}
    />
    <AccountSelect
      accountId={accountId}
      setAccountId={() => undefined}
      disabled
    />
    <AmountInput value={amount} onChange={setAmount} />
    <MemoTextArea memo={memo} setMemo={setMemo} />

    <div>
      <Button
        type={"register"}
        onClick={registerHandler}
        disabled={!registerable}
      />
    </div>
  </div>
);
