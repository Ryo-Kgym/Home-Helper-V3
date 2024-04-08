/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { AmountInput } from "@components/molecules/CustomNumberInput/Amount";
import { IocomeTypeSegment } from "@components/molecules/CustomSegment/IocomeType";
import { CategorySelect } from "@components/molecules/CustomSelect/Category";
import { GenreSelect } from "@components/molecules/CustomSelect/Genre";
import { MemoTextArea } from "@components/molecules/CustomTextArea/Memo";
import { Button } from "@components/ui";
import { DatePicker } from "@components/ui/date";

import type { IocomeType } from "@domain/model/household/IocomeType";

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
