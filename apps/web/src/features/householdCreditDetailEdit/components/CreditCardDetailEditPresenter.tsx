import { ReactNode } from "react";

import { IocomeTypeSegment } from "../../../components/molecules/CustomSegment/IocomeType";
import { CategorySelect } from "../../../components/molecules/CustomSelect/Category";
import { GenreSelect } from "../../../components/molecules/CustomSelect/Genre";
import { MemoTextArea } from "../../../components/molecules/CustomTextArea/Memo";
import { Button } from "../../../components/ui/button/v5";
import { IsExpenseCheckbox } from "../../../components/ui/checkbox/isExpense/IsExpenseCheckbox";
import { DatePicker } from "../../../components/ui/date";
import { AmountInput } from "../../../components/ui/numberInput/amount/AmountInput";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import {
  CreditDetailEditDisplayState,
  CreditDetailEditFormState,
} from "../types/type";

export const CreditCardDetailEditPresenter = ({
  formData,
  display,
  setIocomeType,
  setCategoryId,
  setGenreId,
  setMemo,
  setIsExpense,
  onClickUpdate,
  onClickReset,
}: {
  formData: CreditDetailEditFormState;
  display: CreditDetailEditDisplayState;
  setIocomeType: (_: IocomeType) => void;
  setCategoryId: (_: string | null) => void;
  setGenreId: (_: string | null) => void;
  setMemo: (_: string) => void;
  setIsExpense: (_: boolean) => void;
  onClickUpdate: () => void;
  onClickReset: () => void;
}) => (
  <div className={"grid w-full grid-cols-1"}>
    <Frame>
      <DatePicker
        value={display.date}
        onChange={() => undefined}
        defaultValue={display.date}
        disabled
      />
    </Frame>
    <Frame>
      <IocomeTypeSegment
        iocomeType={display.iocomeType}
        setIocomeType={setIocomeType}
        disabled
      />
    </Frame>
    <Frame>
      <GenreSelect
        iocomeType={display.iocomeType}
        genreId={formData.genreId}
        setGenreId={setGenreId}
      />
    </Frame>
    <Frame>
      <CategorySelect
        genreId={formData.genreId}
        categoryId={formData.categoryId}
        setCategoryId={setCategoryId}
      />
    </Frame>
    <Frame>
      <AmountInput value={display.amount} onChange={() => undefined} disabled />
    </Frame>
    <Frame>
      <MemoTextArea memo={formData.memo} setMemo={setMemo} />
    </Frame>
    <Frame>
      <IsExpenseCheckbox checked={formData.isExpense} onChange={setIsExpense} />
    </Frame>
    <div className={"flex justify-end space-x-5"}>
      <Button onClick={onClickUpdate} label={"更新"} type={"modify"} />
      <Button onClick={onClickReset} label={"リセット"} type={"reset"} />
    </div>
  </div>
);

const Frame = ({ children }: { children: ReactNode }) => (
  <div className={"py-2"}>{children}</div>
);
