/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { IocomeType } from "../../../../domain/model/household/IocomeType";
import { AmountInput } from "../../../molecules/CustomNumberInput/Amount";
import { IocomeTypeSegment } from "../../../molecules/CustomSegment/IocomeType";
import { AccountSelect } from "../../../molecules/CustomSelect/Account";
import { CategorySelect } from "../../../molecules/CustomSelect/Category";
import { GenreSelect } from "../../../molecules/CustomSelect/Genre";
import { MemoTextArea } from "../../../molecules/CustomTextArea/Memo";
import { Button } from "../../../ui";
import { DatePicker } from "../../../ui/date";

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
  <div className={"grid w-full grid-cols-1"}>
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
      <Button type={"update"} onClick={updateClickHandler} />
      <Button type={"reset"} onClick={resetClickHandler} />
      <Button type={"delete"} onClick={deleteClickHandler} />
    </div>
  </div>
);

const Field = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className={"py-2 max-sm:py-1"}>{children}</div>
  </>
);
