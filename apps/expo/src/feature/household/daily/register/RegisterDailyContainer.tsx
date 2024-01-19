import { useState } from "react";

import type { IocomeType } from "~/types/iocome-type";
import { RegisterDailyPresenter } from "./RegisterDailyPresenter";

export const RegisterDailyContainer = ({
  initialDate = new Date(),
}: {
  initialDate?: Date;
}) => {
  const [date, setDate] = useState<Date | undefined>(initialDate);
  const [iocomeType, setIocomeType] = useState<IocomeType>("INCOME");
  const [genreId, setGenreId] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [accountId, setAccountId] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [memo, setMemo] = useState<string | null>(null);

  const resetHandler = () => {
    setDate(initialDate);
    setIocomeType("INCOME");
    setGenreId("");
    setAccountId("");
    setAmount(0);
    setMemo(null);
  };

  const registerHandler = () => {
    console.log("register");
  };

  return (
    <RegisterDailyPresenter
      date={{
        value: date,
        setValue: setDate,
      }}
      iocomeType={{
        value: iocomeType,
        setValue: setIocomeType,
      }}
      genre={{
        value: genreId,
        setValue: setGenreId,
      }}
      category={{
        value: categoryId,
        setValue: setCategoryId,
      }}
      account={{
        value: accountId,
        setValue: setAccountId,
      }}
      amount={{
        value: amount,
        setValue: setAmount,
      }}
      memo={{
        value: memo,
        setValue: setMemo,
      }}
      resetHandler={resetHandler}
      registerHandler={registerHandler}
    />
  );
};
