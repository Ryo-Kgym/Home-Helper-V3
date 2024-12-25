import { FC, PropsWithChildren } from "react";
import { Button } from "components/ui/button/v5";
import { DatePicker } from "components/ui/date";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { MemoTextArea } from "../../molecules/CustomTextArea/Memo";
import { AmountInput } from "../../ui/numberInput/amount/AmountInput";
import { IocomeTypeSegment } from "../../ui/segment/IocomeTypeSegment";
import { AccountSelect } from "../../ui/select/AccountSelect";
import { CategorySelect } from "../../ui/select/CategorySelect";
import { GenreSelect } from "../../ui/select/GenreSelect";
import { DailyDetailForm } from "./dailyDetailForm";

type Props = {
  form: DailyDetailForm;
  setDate: (_: Date) => void;
  setIocomeType: (_: IocomeType) => void;
  setCategoryId: (_: string | null) => void;
  setGenreId: (_: string | null) => void;
  setAccountId: (_: string | null) => void;
  setAmount: (_: number) => void;
  setMemo: (_: string) => void;
  clearClick: () => void;
  registerClick: () => void;
};

export const RegisterDailyDetailPresenter: FC<Props> = ({
  form,
  setDate,
  setIocomeType,
  setCategoryId,
  setGenreId,
  setAccountId,
  setAmount,
  setMemo,
  clearClick,
  registerClick,
}) => (
  <div className={"grid w-full grid-cols-1"}>
    <Field>
      <DatePicker
        value={form.date}
        onChange={setDate}
        required
        defaultValue={form.date}
      />
    </Field>
    <Field>
      <IocomeTypeSegment
        iocomeType={form.iocomeType}
        onChange={setIocomeType}
      />
    </Field>
    <Field>
      <GenreSelect
        iocomeType={form.iocomeType}
        genreId={form.genreId}
        onChange={setGenreId}
      />
    </Field>
    <Field>
      <CategorySelect
        genreId={form.genreId}
        categoryId={form.categoryId}
        onChange={setCategoryId}
      />
    </Field>
    <Field>
      <AccountSelect accountId={form.accountId} onChange={setAccountId} />
    </Field>
    <Field>
      <AmountInput value={form.amount} onChange={setAmount} />
    </Field>
    <Field>
      <MemoTextArea memo={form.memo} setMemo={setMemo} />
    </Field>
    <div className={"grid grid-cols-2 justify-items-center"}>
      <Button type={"add"} onClick={registerClick} label={"登録"} />
      <Button type={"back"} onClick={clearClick} label={"クリア"} />
    </div>
  </div>
);

const Field: FC<PropsWithChildren> = ({ children }) => (
  <div className={"py-2 max-sm:py-1"}>{children}</div>
);
