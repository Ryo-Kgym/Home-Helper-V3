import { useEffect, useMemo, useState } from "react";
import { useGetCreditCardDetailByIdQuery } from "@v3/graphql/household";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import {
  CreditDetailEditDisplayState,
  CreditDetailEditFormState,
} from "../types/type";

export const useStateCreditDetail = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<
    CreditDetailEditFormState | undefined
  >(undefined);
  const [display, setDisplay] = useState<CreditDetailEditDisplayState>({
    id: "",
    date: new Date(),
    iocomeType: IocomeType.Income,
    amount: 0,
  });

  const [{ data }] = useGetCreditCardDetailByIdQuery({
    variables: {
      id,
    },
  });

  const initData = useMemo(
    () => ({
      date: new Date(data?.creditCardDetail?.date as string),
      iocomeType:
        data?.creditCardDetail?.genre?.iocomeType ?? IocomeType.Income,
      genreId: data?.creditCardDetail?.genre?.id,
      categoryId: data?.creditCardDetail?.category?.id,
      amount: Number(data?.creditCardDetail?.amount) ?? "",
      memo: data?.creditCardDetail?.memo,
      tags: data?.creditCardDetail?.tags.map((tag) => tag.id) ?? [],
    }),
    [data],
  );

  useEffect(() => {
    if (!data) {
      return;
    }
    setLoading(true);

    setFormData({
      genreId: data.creditCardDetail?.genre?.id ?? "",
      categoryId: data.creditCardDetail?.category?.id ?? "",
      memo: data.creditCardDetail?.memo ?? "",
      tags: data.creditCardDetail?.tags.map((tag) => tag.id) ?? [],
    });
    setDisplay({
      id: data.creditCardDetail?.id ?? "",
      date: new Date(data.creditCardDetail?.date),
      iocomeType:
        (data.creditCardDetail?.genre?.iocomeType as IocomeType) ??
        IocomeType.Income,
      amount: data.creditCardDetail?.amount ?? 0,
    });

    setLoading(false);
  }, [data]);

  const initializeForm = () => {
    setFormData({
      genreId: initData.genreId ?? "",
      categoryId: initData.categoryId ?? "",
      memo: initData.memo ?? "",
      tags: initData.tags,
    });
  };

  return {
    loading,
    formData,
    setFormData,
    initializeForm,
    display,
  };
};
