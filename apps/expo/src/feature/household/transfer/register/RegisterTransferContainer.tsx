import { useState } from "react";

import type { IocomeType } from "~/types/iocome-type";
import { useRegisterDaily } from "~/hooks/household/daily/useRegisterDaily";
import { RegisterTransferPresenter } from "./RegisterTransferPresenter";

export const RegisterTransferContainer = ({
  initialDate = new Date(),
}: {
  initialDate?: Date;
}) => {
  const [date, setDate] = useState<Date | undefined>(initialDate);
  const [iocomeType, setIocomeType] = useState<IocomeType>("INCOME");
  const [accountId, setAccountId] = useState<string>("");
  const [amount, setAmount] = useState<number | null>(null);
  const [memo, setMemo] = useState<string | null>(null);

  const { registerDaily } = useRegisterDaily();

  const registerable = typeof amount === "number";

  const resetHandler = () => {
    setDate(initialDate);
    setIocomeType("INCOME");
    setAccountId("");
    setAmount(null);
    setMemo(null);
  };

  const registerHandler = async () => {
    if (!registerable) return;

    try {
      await registerDaily({
        date: date ?? new Date(),
        iocomeType,
        genreId: "genreId",
        categoryId: "categoryId",
        accountId,
        amount,
        memo,
      });
      alert("登録しました");
      setAmount(0);
      setMemo(null);
    } catch (error) {
      console.error(error);
      alert("登録に失敗しました");
    }
  };

  return (
    <RegisterTransferPresenter
      date={{
        value: date,
        setValue: setDate,
      }}
      fromAccount={{
        value: accountId,
        setValue: setAccountId,
      }}
      toAccount={{
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
