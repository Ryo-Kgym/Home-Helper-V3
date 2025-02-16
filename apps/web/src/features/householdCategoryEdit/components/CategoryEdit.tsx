"use client";

import {
  useGetCategoryByIdQuery,
  useUpdateCategoryByIdMutation,
} from "@v3/graphql/household";
import { GenreSelect } from "components/ui/select/GenreSelect";
import { type ReactNode, useEffect, useState } from "react";

import { GenreNameTextInput } from "../../../components/molecules/CustomTextInput";
import { Button } from "../../../components/ui/button/v5";
import { DisplayOrderInput } from "../../../components/ui/numberInput/displayOrder/DisplayOrderInput";
import { IocomeTypeSegment } from "../../../components/ui/segment/IocomeTypeSegment";
import { ValiditySegment } from "../../../components/ui/segment/ValiditySegment";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { errorPopup, successPopup } from "../../../function/successPopup";

export const CategoryEdit = ({ categoryId }: { categoryId: string }) => {
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
        genreId: inputGenreId as string,
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
    setInputGenreId(
      inputIocomeType !== (iocomeType as IocomeType) ? null : genreId,
    );
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
          onChange={setInputIocomeType}
        />
      </Frame>
      <Frame title={"ジャンル"}>
        <GenreSelect
          genreId={inputGenreId}
          onChange={setInputGenreId}
          iocomeType={inputIocomeType}
        />
      </Frame>
      <Frame title={"有効・無効"}>
        <ValiditySegment isValid={inputIsValid} onChange={setInputIsValid} />
      </Frame>
      <Frame title={"表示順"}>
        <DisplayOrderInput
          value={inputDisplayOrder}
          onChange={setInputDisplayOrder}
        />
      </Frame>

      <Button onClick={updateHandler} type={"modify"} label={"更新"} />
    </div>
  );
};

const Frame = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className={"my-4 rounded bg-gray-100 p-4"}>
    <div className={"text-gray-500"}>{title}</div>
    <div className={"ml-[1em] text-xl"}>{children}</div>
  </div>
);
