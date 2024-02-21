import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import type { IocomeType } from "~/types/iocome-type";
import { useEditCreditCardDetail } from "~/hooks/household/credit_card/useEditCreditCardDetail";
import { useGetCreditCardDetailById } from "~/hooks/household/credit_card/useGetCreditCardDetailById";
import { SplitCreditCardDetailPresenter } from "./SplitCreditCardDetailPresenter";

export const SplitCreditCardDetailContainer = ({ id }: { id: string }) => {
  const { creditCardDetail, loading } = useGetCreditCardDetailById({ id });

  const [iocomeType, setIocomeType] = useState<IocomeType>("INCOME");
  const [genreId, setGenreId] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [amount, setAmount] = useState<number | null>(null);
  const [memo, setMemo] = useState<string | null>(null);

  const { editCreditCardDetail } = useEditCreditCardDetail();
  const { back } = useRouter();

  const resetHandler = () => {
    setIocomeType(creditCardDetail.genre.iocomeType);
    setGenreId(creditCardDetail.genre.id);
    setCategoryId(creditCardDetail.category.id);
    setAmount(creditCardDetail.amount);
    setMemo(creditCardDetail.memo);
  };

  const updateHandler = async () => {
    if (!amount) return;
    try {
      await editCreditCardDetail({
        id,
        genreId,
        categoryId,
        memo,
      });
      alert("更新しました");
      back();
    } catch (e) {
      console.error(e);
      alert("更新に失敗しました");
    }
  };

  useEffect(() => {
    setIocomeType(creditCardDetail.genre.iocomeType);
    setGenreId(creditCardDetail.genre.id);
    setCategoryId(creditCardDetail.category.id);
    setAmount(creditCardDetail.amount);
    setMemo(creditCardDetail.memo);
  }, [loading]);

  return (
    <SplitCreditCardDetailPresenter
      iocomeType={{
        value: iocomeType,
        default: creditCardDetail.genre.iocomeType,
        setValue: setIocomeType,
      }}
      genre={{
        value: genreId,
        default: creditCardDetail.genre.id,
        setValue: setGenreId,
      }}
      category={{
        value: categoryId,
        default: creditCardDetail.category.id,
        setValue: setCategoryId,
      }}
      amount={{
        value: amount,
        default: creditCardDetail.amount,
        setValue: setAmount,
      }}
      memo={{
        value: memo,
        default: creditCardDetail.memo,
        setValue: setMemo,
      }}
      resetHandler={resetHandler}
      updateHandler={updateHandler}
      disabled={loading}
    />
  );
};
