import { useGetDailyDetailById } from "~/hooks/household/daily/useGetDailyDetailById";
import { DailyDetailPresenter } from "./DailyDetailPresenter";

export const DailyDetailContainer = ({ id }: { id: string }) => {
  const { daily } = useGetDailyDetailById({ id });

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
        value: daily.account.id,
        default: daily.account.id,
        setValue: () => undefined,
      }}
      amount={{
        value: daily.amount,
        default: daily.amount,
        setValue: () => undefined,
      }}
      memo={{
        value: daily.memo,
        default: daily.memo,
        setValue: () => undefined,
      }}
    />
  );
};
