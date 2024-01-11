/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { GenreSelect } from "@components/molecules/CustomSelect/Genre";
import { CategorySelect } from "@components/molecules/CustomSelect/Category";
import { IocomeTypeSegment } from "@components/molecules/CustomSegment/IocomeType";
import { IocomeType } from "@domain/model/household/IocomeType";
import { AmountInput } from "@components/molecules/CustomNumberInput/Amount";
import { MemoTextArea } from "@components/molecules/CustomTextArea/Memo";
import { Button } from "@components/ui";
import { DatePicker } from "@components/ui/date";

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
  <div className={"grid grid-cols-1 w-full"}>
    <Field>
      <DatePicker
        value={date ?? new Date()}
        onChange={() => {}}
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
      <AmountInput value={amount} onChange={() => {}} disabled />
    </Field>
    <Field>
      <MemoTextArea memo={memo} setMemo={changeMemoHandler} />
    </Field>
    <Button colorType={"update"} onClick={updateClickHandler} />
    <Button colorType={"reset"} onClick={resetClickHandler} />
  </div>
);

const Field = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className={"py-2"}>{children}</div>
  </>
);
