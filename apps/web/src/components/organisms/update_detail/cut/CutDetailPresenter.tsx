/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { IocomeType } from "../../../../domain/model/household/IocomeType";
import { AmountInput } from "../../../molecules/CustomNumberInput/Amount";
import { AccountSelect } from "../../../molecules/CustomSelect/Account";
import { CategorySelect } from "../../../molecules/CustomSelect/Category";
import { GenreSelect } from "../../../molecules/CustomSelect/Genre";
import { MemoTextArea } from "../../../molecules/CustomTextArea/Memo";
import { Button } from "../../../ui";
import { DatePicker } from "../../../ui/date";

export const CutDetailPresenter = ({
  detailDate,
  defaultDetailDate,
  setDetailDate,
  iocomeType,
  genreId,
  defaultGenreId,
  changeGenreIdHandler,
  categoryId,
  defaultCategoryId,
  changeCategoryIdHandler,
  defaultAccountId,
  amount,
  cutAfterAmount,
  defaultAmount,
  changeAmountHandler,
  defaultMemo,
  newMemo,
  changeNewMemoHandler,
  cutAfterMemo,
  changeCutAfterMemoHandler,
  updateHandler,
  clearHandler,
  updateButtonDisabled,
}: {
  detailDate: Date;
  defaultDetailDate: Date;
  setDetailDate: (_: Date) => void;
  iocomeType: IocomeType;
  genreId: string | null;
  defaultGenreId: string | null;
  changeGenreIdHandler: (_: string | null) => void;
  categoryId: string | null;
  defaultCategoryId: string | null;
  changeCategoryIdHandler: (_: string | null) => void;
  defaultAccountId: string | null;
  amount: number | "";
  cutAfterAmount: number;
  defaultAmount: number | "";
  changeAmountHandler: (_: number | "") => void;
  defaultMemo: string;
  newMemo: string;
  changeNewMemoHandler: (_: string) => void;
  cutAfterMemo: string;
  changeCutAfterMemoHandler: (_: string) => void;
  updateHandler: () => void;
  clearHandler: () => void;
  updateButtonDisabled: boolean;
}) => (
  <div>
    <div className={"flex items-center justify-items-center"}>
      <div className={"w-full"}>
        <div>分解前</div>
        <DatePicker
          value={defaultDetailDate}
          onChange={() => undefined}
          required
          defaultValue={defaultDetailDate}
          disabled
        />
        <GenreSelect
          genreId={defaultGenreId}
          setGenreId={() => undefined}
          iocomeType={iocomeType}
          disabled
        />
        <CategorySelect
          genreId={defaultGenreId}
          categoryId={defaultCategoryId}
          setCategoryId={() => undefined}
          disabled
        />
        <AccountSelect
          accountId={defaultAccountId}
          setAccountId={() => undefined}
          disabled
        />
        <AmountInput
          value={defaultAmount}
          onChange={() => undefined}
          disabled
        />
        <MemoTextArea memo={defaultMemo} setMemo={() => undefined} disabled />
      </div>
      <div className={"w-32 items-center justify-items-center text-center"}>
        <div>{"->"}</div>
      </div>
      <div className={"w-full"}>
        <div>分解後</div>
        <DatePicker
          value={defaultDetailDate}
          onChange={() => undefined}
          required
          defaultValue={defaultDetailDate}
          disabled
        />
        <GenreSelect
          genreId={defaultGenreId}
          setGenreId={() => undefined}
          iocomeType={iocomeType}
          disabled
        />
        <CategorySelect
          genreId={defaultGenreId}
          categoryId={defaultCategoryId}
          setCategoryId={() => undefined}
          disabled
        />
        <AccountSelect
          accountId={defaultAccountId}
          setAccountId={() => undefined}
          disabled
        />
        <AmountInput
          value={cutAfterAmount}
          onChange={() => undefined}
          disabled
        />
        <MemoTextArea memo={cutAfterMemo} setMemo={changeCutAfterMemoHandler} />
      </div>
      <div className={"w-32 items-center justify-items-center text-center"}>
        <div>{"+"}</div>
      </div>
      <div className={"w-full"}>
        <div>新規</div>
        <DatePicker
          value={detailDate}
          onChange={setDetailDate}
          required
          defaultValue={detailDate}
        />
        <GenreSelect
          genreId={genreId}
          setGenreId={changeGenreIdHandler}
          iocomeType={iocomeType}
        />
        <CategorySelect
          genreId={genreId}
          categoryId={categoryId}
          setCategoryId={changeCategoryIdHandler}
        />
        <AccountSelect
          accountId={defaultAccountId}
          setAccountId={() => undefined}
          disabled
        />
        <AmountInput value={amount} onChange={changeAmountHandler} />
        <MemoTextArea memo={newMemo} setMemo={changeNewMemoHandler} />
      </div>
    </div>
    <div className={"grid grid-cols-2 justify-items-center"}>
      <Button
        type={"update"}
        onClick={updateHandler}
        disabled={updateButtonDisabled}
      />
      <Button type={"clear"} onClick={clearHandler} />
    </div>
  </div>
);
