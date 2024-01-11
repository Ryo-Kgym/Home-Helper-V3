/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

"use client";

import { useEffect, useMemo, useState } from "react";
import { Presenter_ } from "./Presenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import {
  useGetCreditCardDetailByIdQuery,
  useUpdateCreditCardDetailByIdMutation,
} from "@graphql/hasura/generated/hasuraGraphql";
import { successPopup } from "@function/successPopup";

export const Container_ = ({ id }: { id: string | null }) => {
  const [iocomeType, setIocomeType] = useState<IocomeType>(IocomeType.Income);
  const [genreId, setGenreId] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [memo, setMemo] = useState<string | null>(null);

  const [{ data }] = useGetCreditCardDetailByIdQuery({
    variables: {
      id: id == null ? Number.MIN_VALUE.toString() : id,
    },
  });

  const [, update] = useUpdateCreditCardDetailByIdMutation();

  const updateHandler = () => {
    update({
      id: id!,
      categoryId: categoryId!,
      memo: memo,
    });
    successPopup("更新しました。");
  };

  const initData = useMemo(
    () => ({
      date: new Date(data?.creditCardDetailByPk?.date),
      iocomeType:
        data?.creditCardDetailByPk?.category?.genre?.iocomeType ??
        IocomeType.Income,
      genreId: data?.creditCardDetailByPk?.category?.genre?.genreId ?? null,
      categoryId: data?.creditCardDetailByPk?.category?.categoryId ?? null,
      amount: Number(data?.creditCardDetailByPk?.amount) ?? "",
      memo: data?.creditCardDetailByPk?.memo,
    }),
    [data],
  );

  const resetClickHandler = () => {
    setIocomeType(initData.iocomeType! as IocomeType);
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
