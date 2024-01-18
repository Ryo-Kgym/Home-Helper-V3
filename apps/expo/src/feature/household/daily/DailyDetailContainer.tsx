import { useEffect, useState } from "react";

import type { IocomeType } from "~/types/iocome-type";
import { useGetDailyDetailById } from "~/hooks/household/daily/useGetDailyDetailById";
import { DailyDetailPresenter } from "./DailyDetailPresenter";

export const DailyDetailContainer = ({ id }: { id: string }) => {
  const { daily } = useGetDailyDetailById({ id });

  const [iocomeType, setIocomeType] = useState<IocomeType>("INCOME");
  const [genreId, setGenreId] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [accountId, setAccountId] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [memo, setMemo] = useState<string | null>(null);

  useEffect(() => setGenreId(daily.genre.id), [daily.genre.id]);
  useEffect(() => setCategoryId(daily.category.id), [daily.category.id]);
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
    />
  );
};
