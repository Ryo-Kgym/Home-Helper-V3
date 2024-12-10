/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { Button } from "components/ui";
import { DatePicker } from "components/ui/date";

// import { AmountInput } from "~/components/molecules/CustomNumberInput/Amount";
// import { IocomeTypeSegment } from "~/components/molecules/CustomSegment/IocomeType";
// import { AccountSelect } from "~/components/molecules/CustomSelect/Account";
// import { CategorySelect } from "~/components/molecules/CustomSelect/Category";
// import { GenreSelect } from "~/components/molecules/CustomSelect/Genre";
// import { MemoTextArea } from "~/components/molecules/CustomTextArea/Memo";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { AmountInput } from "../../molecules/CustomNumberInput/Amount";
import { IocomeTypeSegment } from "../../molecules/CustomSegment/IocomeType";
import { AccountSelect } from "../../molecules/CustomSelect/Account";
import { CategorySelect } from "../../molecules/CustomSelect/Category";
import { GenreSelect } from "../../molecules/CustomSelect/Genre";
import { MemoTextArea } from "../../molecules/CustomTextArea/Memo";

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
  <div className={"grid w-full grid-cols-1"}>
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
      <Button type={"register"} onClick={registerClickHandler} />
      <Button type={"clear"} onClick={clearClickHandler} />
    </div>
  </div>
);

const Field = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className={"py-2 max-sm:py-1"}>{children}</div>
  </>
);
