/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { GenreSelect } from "@components/molecules/CustomSelect/Genre";
import { CategorySelect } from "@components/molecules/CustomSelect/Category";
import { AccountSelect } from "@components/molecules/CustomSelect/Account";
import { IocomeTypeSegment } from "@components/molecules/CustomSegment/IocomeType";
import { IocomeType } from "@domain/model/household/IocomeType";
import { AmountInput } from "@components/molecules/CustomNumberInput/Amount";
import { MemoTextArea } from "@components/molecules/CustomTextArea/Memo";
import { Button } from "components/ui";
import { DatePicker } from "components/ui/date";

type RegisterDailyDetailPresenterProps = {
  date: Date;
  setDate: (_: Date) => void;
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
  clearClickHandler: () => void;
  registerClickHandler: () => void;
};
export const RegisterDailyDetailPresenter = ({
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
  clearClickHandler,
  registerClickHandler,
}: {
  date: Date;
  setDate: (_: Date) => void;
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
  clearClickHandler: () => void;
  registerClickHandler: () => void;
}) => (
  <div className={"grid grid-cols-1 w-full"}>
    <Field>
      <DatePicker
        value={date}
        onChange={setDate}
        required
        defaultValue={date}
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
    <div className={"grid grid-cols-2 justify-items-center"}>
      <Button colorType={"register"} onClick={registerClickHandler} />
      <Button colorType={"clear"} onClick={clearClickHandler} />
    </div>
  </div>
);

const Field = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className={"py-2 max-sm:py-1"}>{children}</div>
  </>
);
