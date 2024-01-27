import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import type { IocomeType } from "~/types/iocome-type";
import { useGetCreditCardDetailById } from "~/hooks/household/credit_card/useGetCreditCardDetailById";
import { useDeleteDaily } from "~/hooks/household/daily/useDeleteDaily";
import { useEditDaily } from "~/hooks/household/daily/useEditDaily";
import { useAlert } from "~/hooks/useAlert";
import { EditCreditCardDetailPresenter } from "./EditCreditCardDetailPresenter";

export const EditCreditCardDetailContainer = ({ id }: { id: string }) => {
  const { creditCardDetail, loading } = useGetCreditCardDetailById({ id });

  const [date, setDate] = useState<Date | undefined>(creditCardDetail.date);
  const [iocomeType, setIocomeType] = useState<IocomeType>("INCOME");
  const [genreId, setGenreId] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [accountId, setAccountId] = useState<string>("");
  const [amount, setAmount] = useState<number | null>(null);
  const [memo, setMemo] = useState<string | null>(null);

  const { editDaily } = useEditDaily();
  const { deleteDaily } = useDeleteDaily();
  const { alertBuilder } = useAlert();
  const { back } = useRouter();

  const resetHandler = () => {
    setDate(creditCardDetail.date);
    setIocomeType(creditCardDetail.genre.iocomeType);
    setGenreId(creditCardDetail.genre.id);
    setCategoryId(creditCardDetail.category.id);
    setAccountId(creditCardDetail.account.id);
    setAmount(creditCardDetail.amount);
    setMemo(creditCardDetail.memo);
  };

  const editHandler = async () => {
    if (!amount) return;
    try {
      await editDaily({
        id,
        date: date!,
        iocomeType,
        genreId,
        categoryId,
        accountId,
        amount,
        memo,
      });
      alert("更新しました");
      back();
    } catch (e) {
      console.error(e);
      alert("更新に失敗しました");
    }
  };

  const deleteHandler = async () => {
    try {
      await deleteDaily(id);
      alert("削除しました");
      back();
    } catch (e) {
      console.error(e);
      alert("削除に失敗しました");
    }
  };

  const onPressAlert = () => {
    alertBuilder({
      title: "削除しますか？",
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      okCallback: deleteHandler,
    });
  };

  useEffect(() => {
    setDate(creditCardDetail.date);
    setIocomeType(creditCardDetail.genre.iocomeType);
    setGenreId(creditCardDetail.genre.id);
    setCategoryId(creditCardDetail.category.id);
    setAccountId(creditCardDetail.account.id);
    setAmount(creditCardDetail.amount);
    setMemo(creditCardDetail.memo);
  }, [loading]);

  return (
    <EditCreditCardDetailPresenter
      id={id}
      date={{
        value: date,
        default: creditCardDetail.date,
        setValue: setDate,
      }}
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
      account={{
        value: accountId,
        default: creditCardDetail.account.id,
        setValue: setAccountId,
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
      editHandler={editHandler}
      deleteHandler={onPressAlert}
      disabled={true}
    />
  );
};
