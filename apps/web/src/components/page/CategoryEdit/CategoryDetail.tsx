/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { useEffect, useState } from "react";
import { Button } from "@components/ui";
import {
  useGetCategoryByIdQuery,
  useUpdateCategoryByIdMutation,
} from "@graphql/hasura/generated/hasuraGraphql";
import { DisplayOrderInput } from "@components/molecules/CustomNumberInput/DisplayOrder";
import { ValiditySegment } from "@components/molecules/CustomSegment/ValiditySegment";
import { GenreNameTextInput } from "@components/molecules/CustomTextInput";
import { errorPopup, successPopup } from "@function/successPopup";
import { GenreSelect } from "@components/molecules/CustomSelect/Genre";
import { IocomeType } from "@domain/model/household/IocomeType";
import { IocomeTypeSegment } from "@components/molecules/CustomSegment/IocomeType";

export const CategoryDetail = ({ categoryId }: { categoryId: string }) => {
  const [inputCategoryName, setInputCategoryName] = useState<string>("");
  const [inputIocomeType, setInputIocomeType] = useState<IocomeType>(
    IocomeType.Income,
  );
  const [inputGenreId, setInputGenreId] = useState<string | null>("");
  const [inputIsValid, setInputIsValid] = useState<boolean>(true);
  const [inputDisplayOrder, setInputDisplayOrder] = useState<number | "">(0);

  const [{ data, fetching }] = useGetCategoryByIdQuery({
    variables: {
      categoryId,
    },
  });
  const {
    categoryName,
    displayOrder,
    validFlag,
    genre: { genreId, iocomeType },
  } = data?.category ?? {
    categoryName: "",
    displayOrder: 0,
    validFlag: true,
    genre: { genreId: "", iocomeType: IocomeType.Income },
  };

  const [, mutation] = useUpdateCategoryByIdMutation();

  const updateHandler = async () => {
    try {
      await mutation({
        categoryId,
        categoryName: inputCategoryName,
        genreId: inputGenreId!,
        validFlag: inputIsValid,
        displayOrder: Number(inputDisplayOrder),
      });
      successPopup("更新しました");
    } catch (e) {
      errorPopup("更新に失敗しました");
      console.error(e);
    }
  };

  useEffect(() => {
    setInputCategoryName(categoryName);
  }, [categoryName]);

  useEffect(() => {
    setInputIocomeType(iocomeType as IocomeType);
  }, [iocomeType]);

  useEffect(() => {
    setInputGenreId(inputIocomeType !== iocomeType ? null : genreId);
  }, [inputIocomeType, genreId, iocomeType]);

  useEffect(() => {
    setInputGenreId(genreId);
  }, [genreId]);

  useEffect(() => {
    setInputIsValid(validFlag ?? true);
  }, [validFlag]);

  useEffect(() => {
    setInputDisplayOrder(displayOrder);
  }, [displayOrder]);

  if (fetching) return <div>Loading....</div>;

  return (
    <div className={"w-full p-2"}>
      <Frame title={"カテゴリ名"}>
        <GenreNameTextInput
          genreName={inputCategoryName}
          setGenreName={setInputCategoryName}
        />
      </Frame>
      <Frame title={"収支区分"}>
        <IocomeTypeSegment
          iocomeType={inputIocomeType}
          setIocomeType={setInputIocomeType}
        />
      </Frame>
      <Frame title={"ジャンル"}>
        <GenreSelect
          genreId={inputGenreId}
          setGenreId={setInputGenreId}
          iocomeType={inputIocomeType}
        />
      </Frame>
      <Frame title={"有効・無効"}>
        <ValiditySegment isValid={inputIsValid} setIsValid={setInputIsValid} />
      </Frame>
      <Frame title={"表示順"}>
        <DisplayOrderInput
          value={inputDisplayOrder}
          onChange={setInputDisplayOrder}
        />
      </Frame>

      <Button onClick={updateHandler} colorType={"update"} />
    </div>
  );
};

const Frame = ({
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
