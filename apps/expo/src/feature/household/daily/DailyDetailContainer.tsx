import { useEffect, useState } from "react";

import { useGetDailyDetailById } from "~/hooks/household/daily/useGetDailyDetailById";
import { DailyDetailPresenter } from "./DailyDetailPresenter";

export const DailyDetailContainer = ({ id }: { id: string }) => {
  const { daily } = useGetDailyDetailById({ id });

  const [accountId, setAccountId] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [memo, setMemo] = useState<string | null>(null);

  useEffect(() => setAccountId(daily.account.id), [daily.account.id]);
  useEffect(() => setAmount(daily.amount), [daily.amount]);
  useEffect(() => setMemo(daily.memo), [daily.memo]);

  return (
    <DailyDetailPresenter
      id={id}
      date={{
        value: daily.date,
        default: daily.date,
        setValue: () => undefined,
      }}
      iocomeType={{
        value: daily.genre.iocomeType,
        default: daily.genre.iocomeType,
        setValue: () => undefined,
      }}
      genre={{
        value: daily.genre.id,
        default: daily.genre.id,
        setValue: () => undefined,
      }}
      category={{
        value: daily.category.id,
        default: daily.category.id,
        setValue: () => undefined,
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
    />
  );
};
