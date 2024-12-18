import { Button } from "components/ui/button/v5";
import { DatePicker } from "components/ui/date";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { IocomeTypeSegment } from "../../molecules/CustomSegment/IocomeType";
import { MemoTextArea } from "../../molecules/CustomTextArea/Memo";
import { AmountInput } from "../../ui/numberInput/amount/AmountInput";
import { AccountSelect } from "../../ui/select/AccountSelect";
import { CategorySelect } from "../../ui/select/CategorySelect";
import { GenreSelect } from "../../ui/select/GenreSelect";

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
      <Button type={"add"} onClick={registerClickHandler} label={"登録"} />
      <Button type={"back"} onClick={clearClickHandler} label={"クリア"} />
    </div>
  </div>
);

const Field = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className={"py-2 max-sm:py-1"}>{children}</div>
  </>
);
