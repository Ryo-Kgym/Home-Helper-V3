"use client";

import { Loading } from "../../../components/ui/v5/loading/Loading";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { errorPopup, successPopup } from "../../../function/successPopup";
import { useStateCreditDetail } from "../hooks/useStateCreditDetail";
import { useUpdateCreditDetail } from "../hooks/useUpdateCreditDetail";
import { CreditCardDetailEditPresenter } from "./CreditCardDetailEditPresenter";

export const CreditCardDetailEditContainer = ({ id }: { id: string }) => {
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
      date={display.date}
      iocomeType={display.iocomeType}
      changeIocomeTypeHandler={(value: IocomeType) => {
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
      genreId={formData.genreId}
      changeGenreIdHandler={(value) => {
        setFormData((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            genreId: value,
            categoryId: null,
          };
        });
      }}
      categoryId={formData.categoryId}
      changeCategoryIdHandler={(value) => {
        setFormData((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            categoryId: value,
          };
        });
      }}
      amount={display.amount}
      memo={formData.memo}
      changeMemoHandler={(value: string) => {
        setFormData((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            memo: value,
          };
        });
      }}
      resetClickHandler={initializeForm}
      updateClickHandler={updateHandler}
    />
  );
};
