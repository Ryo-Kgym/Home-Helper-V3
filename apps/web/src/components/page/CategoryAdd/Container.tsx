/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { useState } from "react";
import { useCreateCategoryMutation } from "@graphql/hasura/generated/hasuraGraphql";
import { errorPopup, successPopup } from "@function/successPopup";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useGenerateId } from "@hooks/useGenerateId";
import { useGroup } from "@hooks/group/useGroup";
import { Presenter_ } from "@components/page/CategoryAdd/Presenter";

export const Container_ = () => {
  const { generate } = useGenerateId();
  const { groupId } = useGroup();
  const [inputCategoryName, setInputCategoryName] = useState<string>("");
  const [inputIocomeType, setInputIocomeType] = useState<IocomeType>(
    IocomeType.Income,
  );
  const [inputGenreId, setInputGenreId] = useState<string | null>("");
  const [inputIsValid, setInputIsValid] = useState<boolean>(true);
  const [inputDisplayOrder, setInputDisplayOrder] = useState<number | "">(0);

  const [, mutation] = useCreateCategoryMutation();

  const registerHandler = async () => {
    try {
      const { error } = await mutation({
        categoryId: generate(),
        categoryName: inputCategoryName,
        genreId: inputGenreId!,
        validFlag: inputIsValid,
        displayOrder: Number(inputDisplayOrder),
        groupId,
      });
      if (error) throw new Error(error.message);

      successPopup("登録しました");
    } catch (e) {
      console.error(e);
      errorPopup("登録に失敗しました");
    }
  };

  const registerable = inputCategoryName !== "" && inputGenreId !== null;

  return (
    <Presenter_
      inputCategoryName={inputCategoryName}
      setInputCategoryName={setInputCategoryName}
      inputIocomeType={inputIocomeType}
      setInputIocomeType={setInputIocomeType}
      inputGenreId={inputGenreId}
      setInputGenreId={setInputGenreId}
      inputIsValid={inputIsValid}
      setInputIsValid={setInputIsValid}
      inputDisplayOrder={inputDisplayOrder}
      setInputDisplayOrder={setInputDisplayOrder}
      registerHandler={registerHandler}
      registerable={registerable}
    />
  );
};
