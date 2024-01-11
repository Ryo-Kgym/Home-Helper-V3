/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { GenreSelect } from "@components/molecules/CustomSelect/Genre/index";
import { CategorySelect } from "@components/molecules/CustomSelect/Category/index";
import { AccountSelect } from "@components/molecules/CustomSelect/Account/index";
import { IocomeTypeSegment } from "@components/molecules/CustomSegment/IocomeType/index";
import { IocomeType } from "@domain/model/household/IocomeType";
import { AmountInput } from "@components/molecules/CustomNumberInput/Amount/index";
import { MemoTextArea } from "@components/molecules/CustomTextArea/Memo/index";
import { Button } from "@components/ui/index";
import { DatePicker } from "@components/ui/date/index";

export const ChangeDetailPresenter = ({
  date,
  setDate,
  iocomeType,
  changeIocomeTypeHandler,
  categoryId,
  changeCategoryIdHandler,
  genreId,
  changeGenreIdHandler,
  accountId,
  changeAccountIdHandler,
  amount,
  changeAmountHandler,
  memo,
  changeMemoHandler,
  resetClickHandler,
  updateClickHandler,
  deleteClickHandler,
}: {
  date: Date | null;
  setDate: (_: Date | null) => void;
  iocomeType: IocomeType;
  changeIocomeTypeHandler: (_: IocomeType) => void;
  categoryId: string | null;
  changeCategoryIdHandler: (_: string | null) => void;
  genreId: string | null;
  changeGenreIdHandler: (_: string | null) => void;
  accountId: string | null;
  changeAccountIdHandler: (_: string | null) => void;
  amount: number | "";
  changeAmountHandler: (_: number | "") => void;
  memo: string;
  changeMemoHandler: (_: string) => void;
  resetClickHandler: () => void;
  updateClickHandler: () => void;
  deleteClickHandler: () => void;
}) => (
  <div className={"grid grid-cols-1 w-full"}>
    <Field>
      <DatePicker
        value={date ?? new Date()}
        onChange={setDate}
        required
        defaultValue={date ?? new Date()}
      />
    </Field>
    <Field>
      <IocomeTypeSegment
        iocomeType={iocomeType}
        setIocomeType={changeIocomeTypeHandler}
      />
    </Field>
    <Field>
      <GenreSelect
        iocomeType={iocomeType}
        genreId={genreId}
        setGenreId={changeGenreIdHandler}
      />
    </Field>
    <Field>
      <CategorySelect
        genreId={genreId}
        categoryId={categoryId}
        setCategoryId={changeCategoryIdHandler}
      />
    </Field>
    <Field>
      <AccountSelect
        accountId={accountId}
        setAccountId={changeAccountIdHandler}
      />
    </Field>
    <Field>
      <AmountInput value={amount} onChange={changeAmountHandler} />
    </Field>
    <Field>
      <MemoTextArea memo={memo} setMemo={changeMemoHandler} />
    </Field>
    <div className={"grid grid-cols-3 justify-items-center"}>
      <Button colorType={"update"} onClick={updateClickHandler} />
      <Button colorType={"reset"} onClick={resetClickHandler} />
      <Button colorType={"delete"} onClick={deleteClickHandler} />
    </div>
  </div>
);

const Field = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className={"py-2 max-sm:py-1"}>{children}</div>
  </>
);
