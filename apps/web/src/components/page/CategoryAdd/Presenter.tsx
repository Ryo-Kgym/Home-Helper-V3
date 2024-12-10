/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { DisplayOrderInput } from "../../molecules/CustomNumberInput/DisplayOrder";
import { IocomeTypeSegment } from "../../molecules/CustomSegment/IocomeType";
import { ValiditySegment } from "../../molecules/CustomSegment/ValiditySegment";
import { GenreSelect } from "../../molecules/CustomSelect/Genre";
import { GenreNameTextInput } from "../../molecules/CustomTextInput";
import { Button } from "../../ui";
import { FieldFrame } from "../../ui/FieldFrame/FieldFrame";

export const Presenter_ = ({
  inputCategoryName,
  setInputCategoryName,
  inputIocomeType,
  setInputIocomeType,
  inputGenreId,
  setInputGenreId,
  inputIsValid,
  setInputIsValid,
  inputDisplayOrder,
  setInputDisplayOrder,
  registerHandler,
  registerable,
}: {
  inputCategoryName: string;
  setInputCategoryName: (value: string) => void;
  inputIocomeType: IocomeType;
  setInputIocomeType: (value: IocomeType) => void;
  inputGenreId: string | null;
  setInputGenreId: (value: string | null) => void;
  inputIsValid: boolean;
  setInputIsValid: (value: boolean) => void;
  inputDisplayOrder: number | "";
  setInputDisplayOrder: (value: number | "") => void;
  registerHandler: () => void;
  registerable: boolean;
}) => (
  <div className={"w-full p-2"}>
    <FieldFrame title={"カテゴリ名"}>
      <GenreNameTextInput
        genreName={inputCategoryName}
        setGenreName={setInputCategoryName}
      />
    </FieldFrame>
    <FieldFrame title={"収支区分"}>
      <IocomeTypeSegment
        iocomeType={inputIocomeType}
        setIocomeType={setInputIocomeType}
      />
    </FieldFrame>
    <FieldFrame title={"ジャンル"}>
      <GenreSelect
        genreId={inputGenreId}
        setGenreId={setInputGenreId}
        iocomeType={inputIocomeType}
      />
    </FieldFrame>
    <FieldFrame title={"有効・無効"}>
      <ValiditySegment isValid={inputIsValid} setIsValid={setInputIsValid} />
    </FieldFrame>
    <FieldFrame title={"表示順"}>
      <DisplayOrderInput
        value={inputDisplayOrder}
        onChange={setInputDisplayOrder}
      />
    </FieldFrame>

    <Button
      onClick={registerHandler}
      type={"register"}
      disabled={!registerable}
    />
  </div>
);
