/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { Button } from "@components/ui";
import { DisplayOrderInput } from "@components/molecules/CustomNumberInput/DisplayOrder";
import { IocomeTypeSegment } from "@components/molecules/CustomSegment/IocomeType";
import { GenreTypeSegment } from "@components/molecules/CustomSegment/GenreTypeSegment";
import { ValiditySegment } from "@components/molecules/CustomSegment/ValiditySegment";
import { GenreNameTextInput } from "@components/molecules/CustomTextInput";
import { GenreType } from "@domain/model/household/GenreType";
import { IocomeType } from "@domain/model/household/IocomeType";

export const Presenter_ = ({
  categories = [],
  inputGenreName,
  setInputGenreName,
  inputGenreType,
  setInputGenreType,
  inputIocomeType,
  setInputIocomeType,
  inputIsValid,
  setInputIsValid,
  inputDisplayOrder,
  setInputDisplayOrder,
  updateHandler,
}: {
  categories: {
    categoryId: string;
    categoryName: string;
  }[];
  inputGenreName: string;
  setInputGenreName: (value: string) => void;
  inputGenreType: GenreType;
  setInputGenreType: (value: GenreType) => void;
  inputIocomeType: IocomeType;
  setInputIocomeType: (value: IocomeType) => void;
  inputIsValid: boolean;
  setInputIsValid: (value: boolean) => void;
  inputDisplayOrder: number | "";
  setInputDisplayOrder: (value: number | "") => void;
  updateHandler: () => void;
}) => (
  <div className={"w-full p-2"}>
    <FrameDiv title={"ジャンル名"}>
      <GenreNameTextInput
        genreName={inputGenreName}
        setGenreName={setInputGenreName}
      />
    </FrameDiv>
    <FrameDiv title={"ジャンル区分"}>
      <GenreTypeSegment
        genreType={inputGenreType}
        setGenreType={setInputGenreType}
      />
    </FrameDiv>
    <FrameDiv title={"収支区分"}>
      <IocomeTypeSegment
        iocomeType={inputIocomeType}
        setIocomeType={setInputIocomeType}
      />
    </FrameDiv>
    <FrameDiv title={"有効・無効"}>
      <ValiditySegment isValid={inputIsValid} setIsValid={setInputIsValid} />
    </FrameDiv>
    <FrameDiv title={"表示順"}>
      <DisplayOrderInput
        value={inputDisplayOrder}
        onChange={setInputDisplayOrder}
      />
    </FrameDiv>
    <FrameDiv title={"登録済みのカテゴリ"}>
      <div className={"grid grid-cols-3 text-gray-500"}>
        {categories.map((category) => (
          <div key={category?.categoryId}>{category?.categoryName}</div>
        ))}
      </div>
    </FrameDiv>

    <Button onClick={updateHandler} colorType={"update"} />
  </div>
);

const FrameDiv = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className={"bg-gray-100 p-4 my-4 rounded"}>
    <div className={"text-gray-500"}>{title}</div>
    <div className={"text-xl ml-[1em]"}>{children}</div>
  </div>
);
