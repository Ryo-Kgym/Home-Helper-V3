"use client";

import { FC } from "react";

import { Loading } from "../../../components/ui/v5/loading/Loading";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { errorPopup, successPopup } from "../../../function/successPopup";
import { useStateCreditDetail } from "../hooks/useStateCreditDetail";
import { useUpdateCreditDetail } from "../hooks/useUpdateCreditDetail";
import { CreditCardDetailEditPresenter } from "./CreditCardDetailEditPresenter";

type Props = {
  id: string;
};

export const CreditCardDetailEditContainer: FC<Props> = ({ id }) => {
  const { formData, setFormData, initializeForm, display } =
    useStateCreditDetail({
      id,
    });

  const { updateCreditDetail } = useUpdateCreditDetail({ id });

  const updateHandler = async () => {
    if (!formData) return;
    const { genreId, categoryId, memo } = formData;

    try {
      if (genreId === null) {
        errorPopup("ジャンルを選択してください。");
        return;
      }
      if (categoryId === null) {
        errorPopup("カテゴリーを選択してください。");
        return;
      }

      await updateCreditDetail({
        genreId,
        categoryId,
        memo,
      });
      successPopup("更新しました。");
    } catch (e) {
      errorPopup("更新に失敗しました。");
    }
  };

  if (formData === undefined) return <Loading />;

  return (
    <CreditCardDetailEditPresenter
      formData={formData}
      display={display}
      setIocomeType={(value: IocomeType) => {
        setFormData((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            iocomeType: value,
            genreId: null,
            categoryId: null,
          };
        });
      }}
      setGenreId={(value) => {
        setFormData((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            genreId: value,
            categoryId: null,
          };
        });
      }}
      setCategoryId={(value) => {
        setFormData((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            categoryId: value,
          };
        });
      }}
      setMemo={(value: string) => {
        setFormData((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            memo: value,
          };
        });
      }}
      onClickUpdate={updateHandler}
      onClickReset={initializeForm}
    />
  );
};
