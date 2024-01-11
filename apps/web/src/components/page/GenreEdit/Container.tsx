/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { useEffect, useState } from "react";
import {
  useGetGenreByIdQuery,
  useUpdateGenreByIdMutation,
} from "@graphql/hasura/generated/hasuraGraphql";
import { IocomeType } from "@domain/model/household/IocomeType";
import { GenreType } from "@domain/model/household/GenreType";
import { errorPopup, successPopup } from "@function/successPopup";
import { Presenter_ } from "./Presenter";

export const Container_ = ({ genreId }: { genreId: string }) => {
  const [inputGenreName, setInputGenreName] = useState<string>("");
  const [inputGenreType, setInputGenreType] = useState<GenreType>(
    GenreType.FIXED,
  );
  const [inputIocomeType, setInputIocomeType] = useState<IocomeType>(
    IocomeType.Income,
  );
  const [inputIsValid, setInputIsValid] = useState<boolean>(true);

  const [inputDisplayOrder, setInputDisplayOrder] = useState<number | "">(0);
  const [{ data, fetching }] = useGetGenreByIdQuery({
    variables: {
      genreId,
    },
  });
  const {
    genreName,
    genreType,
    iocomeType,
    displayOrder,
    validFlag,
    categories = [],
  } = data?.genreById ?? {};

  const [, mutation] = useUpdateGenreByIdMutation();

  const updateHandler = async () => {
    try {
      await mutation({
        genreId,
        genreName: inputGenreName,
        genreType: inputGenreType,
        iocomeType: inputIocomeType,
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
    setInputGenreName(genreName ?? "");
  }, [genreName]);

  useEffect(() => {
    setInputGenreType((genreType as GenreType) ?? GenreType.FIXED);
  }, [genreType]);

  useEffect(() => {
    setInputIocomeType((iocomeType as IocomeType) ?? IocomeType.Income);
  }, [iocomeType]);

  useEffect(() => {
    setInputIsValid(validFlag ?? true);
  }, [validFlag]);

  useEffect(() => {
    setInputDisplayOrder(displayOrder ?? "");
  }, [displayOrder]);

  if (fetching) {
    return <div>loading...</div>;
  }

  return (
    <Presenter_
      categories={categories}
      inputGenreName={inputGenreName}
      setInputGenreName={setInputGenreName}
      inputGenreType={inputGenreType}
      setInputGenreType={setInputGenreType}
      inputIocomeType={inputIocomeType}
      setInputIocomeType={setInputIocomeType}
      inputIsValid={inputIsValid}
      setInputIsValid={setInputIsValid}
      inputDisplayOrder={inputDisplayOrder}
      setInputDisplayOrder={setInputDisplayOrder}
      updateHandler={updateHandler}
    />
  );
};
