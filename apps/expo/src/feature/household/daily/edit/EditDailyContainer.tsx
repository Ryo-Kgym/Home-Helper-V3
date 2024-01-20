import { useEffect, useState } from "react";

import type { IocomeType } from "~/types/iocome-type";
import { useEditDaily } from "~/hooks/household/daily/useEditDaily";
import { useGetDailyById } from "~/hooks/household/daily/useGetDailyById";
import { EditDailyPresenter } from "./EditDailyPresenter";

export const EditDailyContainer = ({ id }: { id: string }) => {
  const { daily, loading } = useGetDailyById({ id });

  const [date, setDate] = useState<Date | undefined>(daily.date);
  const [iocomeType, setIocomeType] = useState<IocomeType>("INCOME");
  const [genreId, setGenreId] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [accountId, setAccountId] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [memo, setMemo] = useState<string | null>(null);

  const { editDaily } = useEditDaily();

  const resetHandler = () => {
    setDate(daily.date);
    setIocomeType(daily.genre.iocomeType);
    setGenreId(daily.genre.id);
    setCategoryId(daily.category.id);
    setAccountId(daily.account.id);
    setAmount(daily.amount);
    setMemo(daily.memo);
  };

  const editHandler = async () => {
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
    } catch (e) {
      console.error(e);
      alert("更新に失敗しました");
    }
  };

  useEffect(() => {
    setDate(daily.date);
    setIocomeType(daily.genre.iocomeType);
    setGenreId(daily.genre.id);
    setCategoryId(daily.category.id);
    setAccountId(daily.account.id);
    setAmount(daily.amount);
    setMemo(daily.memo);
  }, [loading]);

  return (
    <EditDailyPresenter
      id={id}
      date={{
        value: date,
        default: daily.date,
        setValue: setDate,
      }}
      iocomeType={{
        value: iocomeType,
        default: daily.genre.iocomeType,
        setValue: setIocomeType,
      }}
      genre={{
        value: genreId,
        default: daily.genre.id,
        setValue: setGenreId,
      }}
      category={{
        value: categoryId,
        default: daily.category.id,
        setValue: setCategoryId,
      }}
      account={{
        value: accountId,
        default: daily.account.id,
        setValue: setAccountId,
      }}
      amount={{
        value: amount,
        default: daily.amount,
        setValue: setAmount,
      }}
      memo={{
        value: memo,
        default: daily.memo,
        setValue: setMemo,
      }}
      resetHandler={resetHandler}
      editHandler={editHandler}
      disabled={loading}
    />
  );
};
