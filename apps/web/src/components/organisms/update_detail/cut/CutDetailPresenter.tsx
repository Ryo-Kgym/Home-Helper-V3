/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { DatePicker } from "@components/ui/date/index";
import { CategorySelect } from "@components/molecules/CustomSelect/Category/index";
import { AccountSelect } from "@components/molecules/CustomSelect/Account/index";
import { AmountInput } from "@components/molecules/CustomNumberInput/Amount/index";
import { MemoTextArea } from "@components/molecules/CustomTextArea/Memo/index";
import { Button } from "@components/ui/index";
import { GenreSelect } from "@components/molecules/CustomSelect/Genre/index";
import { IocomeType } from "@domain/model/household/IocomeType";

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
          onChange={() => {}}
          required
          defaultValue={defaultDetailDate}
          disabled
        />
        <GenreSelect
          genreId={defaultGenreId}
          setGenreId={() => {}}
          iocomeType={iocomeType}
          disabled
        />
        <CategorySelect
          genreId={defaultGenreId}
          categoryId={defaultCategoryId}
          setCategoryId={() => {}}
          disabled
        />
        <AccountSelect
          accountId={defaultAccountId}
          setAccountId={() => {}}
          disabled
        />
        <AmountInput value={defaultAmount} onChange={() => {}} disabled />
        <MemoTextArea memo={defaultMemo} setMemo={() => {}} disabled />
      </div>
      <div className={"w-32 items-center justify-items-center text-center"}>
        <div>{"->"}</div>
      </div>
      <div className={"w-full"}>
        <div>分解後</div>
        <DatePicker
          value={defaultDetailDate}
          onChange={() => {}}
          required
          defaultValue={defaultDetailDate}
          disabled
        />
        <GenreSelect
          genreId={defaultGenreId}
          setGenreId={() => {}}
          iocomeType={iocomeType}
          disabled
        />
        <CategorySelect
          genreId={defaultGenreId}
          categoryId={defaultCategoryId}
          setCategoryId={() => {}}
          disabled
        />
        <AccountSelect
          accountId={defaultAccountId}
          setAccountId={() => {}}
          disabled
        />
        <AmountInput value={cutAfterAmount} onChange={() => {}} disabled />
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
          setAccountId={() => {}}
          disabled
        />
        <AmountInput value={amount} onChange={changeAmountHandler} />
        <MemoTextArea memo={newMemo} setMemo={changeNewMemoHandler} />
      </div>
    </div>
    <div className={"grid grid-cols-2 justify-items-center"}>
      <Button
        colorType={"update"}
        onClick={updateHandler}
        disabled={updateButtonDisabled}
      />
      <Button colorType={"clear"} onClick={clearHandler} />
    </div>
  </div>
);
