/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { IocomeTypeSegment } from "@components/molecules/CustomSegment/IocomeType";
import { GenreSelect } from "@components/molecules/CustomSelect/Genre";
import { CategorySelect } from "@components/molecules/CustomSelect/Category";
import { AmountInput } from "@components/molecules/CustomNumberInput/Amount";
import { MemoTextArea } from "@components/molecules/CustomTextArea/Memo";
import { Button } from "@components/ui";
import { IocomeType } from "@domain/model/household/IocomeType";
import { DatePicker } from "@components/ui/date";

type SetPropertiesPresenterProps = {
  date: Date;
  changeDateHandler: (_: Date) => void;
  iocomeType: IocomeType;
  changeIocomeTypeHandler: (_: IocomeType) => void;
  genreId: string | null;
  changeGenreIdHandler: (_: string | null) => void;
  setGenreName: (_: string | null) => void;
  categoryId: string | null;
  changeCategoryIdHandler: (_: string | null) => void;
  setCategoryName: (_: string | null) => void;
  amount: number | "";
  changeAmountHandler: (_: number | "") => void;
  memo: string;
  changeMemoHandler: (_: string) => void;
  clearClickHandler: () => void;
  settingClickHandler: () => void;
  deleteClickHandler: () => void;
  settingDisabled: boolean;
};
export const SetPropertiesPresenter = ({
  date,
  changeDateHandler,
  iocomeType,
  changeIocomeTypeHandler,
  genreId,
  changeGenreIdHandler,
  setGenreName,
  categoryId,
  changeCategoryIdHandler,
  setCategoryName,
  amount,
  changeAmountHandler,
  memo,
  changeMemoHandler,
  clearClickHandler,
  settingClickHandler,
  deleteClickHandler,
  settingDisabled,
}: SetPropertiesPresenterProps) => (
  <div className={"grid grid-cols-1 w-full"}>
    <Field>
      <DatePicker value={date} onChange={changeDateHandler} disabled={true} />
    </Field>
    <Field>
      <IocomeTypeSegment
        iocomeType={iocomeType}
        setIocomeType={changeIocomeTypeHandler}
        disabled={true}
      />
    </Field>
    <Field>
      <GenreSelect
        iocomeType={iocomeType}
        genreId={genreId}
        setGenreId={changeGenreIdHandler}
        setGenreName={setGenreName}
      />
    </Field>
    <Field>
      <CategorySelect
        genreId={genreId}
        categoryId={categoryId}
        setCategoryId={changeCategoryIdHandler}
        setCategoryName={setCategoryName}
      />
    </Field>
    <Field>
      <AmountInput value={amount} onChange={changeAmountHandler} />
    </Field>
    <Field>
      <MemoTextArea memo={memo} setMemo={changeMemoHandler} />
    </Field>
    <Button
      colorType={"register"}
      label={"SET"}
      onClick={settingClickHandler}
      disabled={settingDisabled}
    />
    <Button colorType={"delete"} onClick={deleteClickHandler} />
    <Button colorType={"clear"} onClick={clearClickHandler} />
  </div>
);

const Field = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className={"py-2"}>{children}</div>
  </>
);
