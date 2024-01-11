/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { DatePicker } from "@components/ui/date";
import { GenreSelect } from "@components/molecules/CustomSelect/Genre";
import { IocomeType } from "@domain/model/household/IocomeType";
import { CategorySelect } from "@components/molecules/CustomSelect/Category";
import { AccountSelect } from "@components/molecules/CustomSelect/Account";
import { AmountInput } from "@components/molecules/CustomNumberInput/Amount";
import { MemoTextArea } from "@components/molecules/CustomTextArea/Memo";
import { Button } from "@components/ui";

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
    <AccountSelect accountId={accountId} setAccountId={() => {}} disabled />
    <AmountInput value={amount} onChange={setAmount} />
    <MemoTextArea memo={memo} setMemo={setMemo} />

    <div>
      <Button
        colorType={"register"}
        onClick={registerHandler}
        disabled={!registerable}
      />
    </div>
  </div>
);
