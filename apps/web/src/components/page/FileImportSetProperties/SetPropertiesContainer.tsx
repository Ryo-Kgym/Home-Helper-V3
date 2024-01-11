/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { SetPropertiesPresenter } from "@components/page/FileImportSetProperties/SetPropertiesPresenter";
import { useState } from "react";
import { IocomeType } from "@domain/model/household/IocomeType";
import { LoadFileProps } from "@components/page/FileImport/loadUploadFile";

type SetPropertiesContainerProps = {
  initialValues: LoadFileProps;
  initLoadData: LoadFileProps[];
  setLoadData: (_: LoadFileProps[]) => void;
  onClose: () => void;
};
export const SetPropertiesContainer = ({
  initialValues,
  initLoadData,
  setLoadData,
  onClose,
}: SetPropertiesContainerProps) => {
  const {
    date: initDate,
    price: initPrice,
    iocomeType: initIocomeType,
    note: initNote,
    genreId: initGenreId,
    categoryId: initCategoryId,
  } = initialValues;

  const [date, setDate] = useState<Date | null>(initDate);
  const [iocomeType, setIocomeType] = useState<IocomeType>(initIocomeType);
  const [genreId, setGenreId] = useState<string | null>(initGenreId);
  const [categoryId, setCategoryId] = useState<string | null>(initCategoryId);
  const [amount, setAmount] = useState<number | "">(initPrice);
  const [memo, setMemo] = useState<string>(initNote);

  const settingDisabled = !categoryId || !genreId || !amount;

  const [genreName, setGenreName] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState<string | null>(null);

  const clearClickHandler = () => {
    setIocomeType(IocomeType.Income);
    setCategoryId(null);
    setGenreId(null);
    setMemo(initNote);
  };

  const settingClickHandler = () => {
    setLoadData(
      [
        initLoadData.filter((d) => d !== initialValues),
        [
          {
            date: date!,
            price: typeof amount === "number" ? amount : 0,
            note: memo,
            iocomeType: iocomeType,
            genreId: genreId!,
            genreName: genreName!,
            categoryId: categoryId!,
            categoryName: categoryName!,
          },
        ],
      ].flatMap((ignore) => ignore),
    );
    onClose();
  };

  const deleteClickHandler = () => {
    setLoadData(initLoadData.filter((d) => d !== initialValues));
    onClose();
  };

  return (
    <SetPropertiesPresenter
      date={date!}
      changeDateHandler={setDate}
      iocomeType={iocomeType}
      changeIocomeTypeHandler={(value) => {
        setIocomeType(value);
        setGenreId(null);
        setCategoryId(null);
      }}
      genreId={genreId}
      changeGenreIdHandler={(value) => {
        setGenreId(value);
        setCategoryId(null);
      }}
      setGenreName={setGenreName}
      categoryId={categoryId}
      changeCategoryIdHandler={(value) => {
        setCategoryId(value);
      }}
      setCategoryName={setCategoryName}
      amount={amount}
      changeAmountHandler={setAmount}
      memo={memo}
      changeMemoHandler={setMemo}
      clearClickHandler={clearClickHandler}
      settingClickHandler={settingClickHandler}
      deleteClickHandler={deleteClickHandler}
      settingDisabled={settingDisabled}
    />
  );
};
