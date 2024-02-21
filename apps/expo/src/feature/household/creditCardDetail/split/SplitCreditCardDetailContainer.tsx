import { useEffect, useState } from "react";

import type { IocomeType } from "~/types/iocome-type";
import { useGetCreditCardDetailById } from "~/hooks/household/credit_card/useGetCreditCardDetailById";
import { SplitCreditCardDetailPresenter } from "./SplitCreditCardDetailPresenter";

export const SplitCreditCardDetailContainer = ({ id }: { id: string }) => {
  const { creditCardDetail, loading } = useGetCreditCardDetailById({ id });

  const [iocomeType, setIocomeType] = useState<IocomeType>("INCOME");
  const [genreId, setGenreId] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [amount, setAmount] = useState<number | null>(null);
  const [splitAmount, setSplitAmount] = useState<number | null>(null);
  const [memo, setMemo] = useState<string | null>(null);

  const resetHandler = () => {
    setIocomeType(creditCardDetail.genre.iocomeType);
    setGenreId(creditCardDetail.genre.id);
    setCategoryId(creditCardDetail.category.id);
    setAmount(creditCardDetail.amount);
    setSplitAmount(0);
    setMemo(creditCardDetail.memo);
  };

  const updateHandler = () => undefined;

  useEffect(() => {
    setIocomeType(creditCardDetail.genre.iocomeType);
    setGenreId(creditCardDetail.genre.id);
    setCategoryId(creditCardDetail.category.id);
    setAmount(creditCardDetail.amount);
    setSplitAmount(0);
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
        setValue: () => undefined,
      }}
      splitAmount={{
        value: splitAmount,
        default: 0,
        setValue: (v) => {
          setAmount(creditCardDetail.amount - (v ?? 0));
          setSplitAmount(v);
        },
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
