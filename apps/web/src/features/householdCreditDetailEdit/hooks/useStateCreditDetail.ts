import { useEffect, useState } from "react";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import type {
  CreditDetailEditDisplayState,
  CreditDetailEditFormState,
} from "../types/type";
import { fetchCreditCardDetailById } from "../useServer/fetchCreditCardDetailById";

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
  const [initData, setInitData] = useState<{
    genreId: string;
    categoryId: string;
    memo: string;
    tags: string[];
  }>({
    genreId: "",
    categoryId: "",
    memo: "",
    tags: [],
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setLoading(true);

    void (async () => {
      const { initData } = await fetchCreditCardDetailById(id);
      setInitData(initData);
      setFormData({
        genreId: initData.genreId,
        categoryId: initData.categoryId,
        memo: initData.memo,
        tags: initData.tags,
      });
      setDisplay({
        id,
        date: initData.date,
        iocomeType: initData.iocomeType,
        amount: initData.amount,
      });
    })();

    setLoading(false);
  }, []);

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
