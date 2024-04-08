/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

"use client";

import { IocomeType } from "@domain/model/household/IocomeType";
import { successPopup } from "@function/successPopup";
import {
  useGetCreditCardDetailByIdQuery,
  useUpdateCreditCardDetailByIdMutation,
} from "@v3/graphql/household";
import { useEffect, useMemo, useState } from "react";

import { Presenter_ } from "./Presenter";

export const Container_ = ({ id }: { id: string | null }) => {
  const [iocomeType, setIocomeType] = useState<IocomeType>(IocomeType.Income);
  const [genreId, setGenreId] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [memo, setMemo] = useState<string | null>(null);

  const [{ data }] = useGetCreditCardDetailByIdQuery({
    variables: {
      id: id ?? Number.MIN_VALUE.toString(),
    },
  });

  const [, update] = useUpdateCreditCardDetailByIdMutation();

  const updateHandler = async () => {
    await update({
      id: id!,
      genreId: genreId!,
      categoryId: categoryId!,
      memo: memo,
    });
    successPopup("更新しました。");
  };

  const initData = useMemo(
    () => ({
      date: new Date(data?.creditCardDetail?.date as string),
      iocomeType:
        data?.creditCardDetail?.genre?.iocomeType ?? IocomeType.Income,
      genreId: data?.creditCardDetail?.genre?.id ?? null,
      categoryId: data?.creditCardDetail?.category?.id ?? null,
      amount: Number(data?.creditCardDetail?.amount) ?? "",
      memo: data?.creditCardDetail?.memo,
    }),
    [data],
  );

  const resetClickHandler = () => {
    setIocomeType(initData.iocomeType as IocomeType);
    setGenreId(initData.genreId);
    setCategoryId(initData.categoryId);
    setMemo(initData.memo ?? null);
  };

  useEffect(resetClickHandler, [initData]);

  if (data == null) return <div>No Data</div>;

  return (
    <Presenter_
      date={initData.date}
      iocomeType={iocomeType}
      changeIocomeTypeHandler={(value: IocomeType) => {
        setIocomeType(value);
        setGenreId(null);
        setCategoryId(null);
      }}
      genreId={genreId}
      changeGenreIdHandler={(value: string | null) => {
        setGenreId(value);
        setCategoryId(null);
      }}
      categoryId={categoryId}
      changeCategoryIdHandler={setCategoryId}
      amount={initData.amount}
      memo={memo ?? ""}
      changeMemoHandler={setMemo}
      resetClickHandler={resetClickHandler}
      updateClickHandler={updateHandler}
    />
  );
};
