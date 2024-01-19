import { useEffect, useState } from "react";

import type { IocomeType } from "~/types/iocome-type";
import { useGetDailyDetailById } from "~/hooks/household/daily/useGetDailyDetailById";
import { RegisterDailyPresenter } from "./RegisterDailyPresenter";

export const RegisterDailyContainer = ({
  initialDate = new Date(),
}: {
  initialDate?: Date;
}) => {
  const { daily, loading } = useGetDailyDetailById({ id: "" });

  const [date, setDate] = useState<Date | undefined>(initialDate);
  const [iocomeType, setIocomeType] = useState<IocomeType>("INCOME");
  const [genreId, setGenreId] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [accountId, setAccountId] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [memo, setMemo] = useState<string | null>(null);

  const resetHandler = () => {
    setDate(initialDate);
    setIocomeType(daily.genre.iocomeType);
    setGenreId(daily.genre.id);
    setCategoryId(daily.category.id);
    setAccountId(daily.account.id);
    setAmount(daily.amount);
    setMemo(daily.memo);
  };

  const updateHandler = () => {
    console.log("update");
  };

  useEffect(() => {
    setDate(initialDate);
    setIocomeType(daily.genre.iocomeType);
    setGenreId(daily.genre.id);
    setCategoryId(daily.category.id);
    setAccountId(daily.account.id);
    setAmount(daily.amount);
    setMemo(daily.memo);
  }, [loading]);

  return (
    <RegisterDailyPresenter
      id={"id"}
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
      updateHandler={updateHandler}
    />
  );
};
