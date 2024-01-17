import { useGetDailyDetailById } from "~/hooks/household/daily/useGetDailyDetailById";
import { DailyDetailPresenter } from "./DailyDetailPresenter";

export const DailyDetailContainer = ({ id }: { id: string }) => {
  const { daily } = useGetDailyDetailById({ id });

  return (
    <DailyDetailPresenter
      id={id}
      date={new Date()}
      account={{ id: "1", name: "現金" }}
      genre={{ id: "1", name: "食費", iocomeType: "INCOME" }}
      category={{ id: "1", name: "外食" }}
      amount={daily.amount}
      memo={daily.memo ?? ""}
    />
  );
};
