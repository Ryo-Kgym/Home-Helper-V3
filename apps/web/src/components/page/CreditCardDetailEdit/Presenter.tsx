/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { AmountInput } from "../../molecules/CustomNumberInput/Amount";
import { IocomeTypeSegment } from "../../molecules/CustomSegment/IocomeType";
import { CategorySelect } from "../../molecules/CustomSelect/Category";
import { GenreSelect } from "../../molecules/CustomSelect/Genre";
import { MemoTextArea } from "../../molecules/CustomTextArea/Memo";
import { Button } from "../../ui";
import { DatePicker } from "../../ui/date";

export const Presenter_ = ({
  date,
  iocomeType,
  changeIocomeTypeHandler,
  categoryId,
  changeCategoryIdHandler,
  genreId,
  changeGenreIdHandler,
  amount,
  memo,
  changeMemoHandler,
  resetClickHandler,
  updateClickHandler,
}: {
  date: Date | null;
  iocomeType: IocomeType;
  changeIocomeTypeHandler: (_: IocomeType) => void;
  categoryId: string | null;
  changeCategoryIdHandler: (_: string | null) => void;
  genreId: string | null;
  changeGenreIdHandler: (_: string | null) => void;
  amount: number | "";
  memo: string;
  changeMemoHandler: (_: string) => void;
  resetClickHandler: () => void;
  updateClickHandler: () => void;
}) => (
  <div className={"grid w-full grid-cols-1"}>
    <Field>
      <DatePicker
        value={date ?? new Date()}
        onChange={() => undefined}
        defaultValue={date ?? new Date()}
        disabled
      />
    </Field>
    <Field>
      <IocomeTypeSegment
        iocomeType={iocomeType}
        setIocomeType={changeIocomeTypeHandler}
        disabled
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
      <AmountInput value={amount} onChange={() => undefined} disabled />
    </Field>
    <Field>
      <MemoTextArea memo={memo} setMemo={changeMemoHandler} />
    </Field>
    <Button colorType={"update"} onClick={updateClickHandler} />
    <Button colorType={"reset"} onClick={resetClickHandler} />
  </div>
);

const Field = ({ children }: { children: React.ReactNode }) => (
  <div className={"py-2"}>{children}</div>
);
