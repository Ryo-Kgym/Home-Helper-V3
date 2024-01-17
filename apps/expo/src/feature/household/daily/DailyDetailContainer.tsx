import { useGetDailyDetailById } from "~/hooks/household/daily/useGetDailyDetailById";
import { DailyDetailPresenter } from "./DailyDetailPresenter";

export const DailyDetailContainer = ({ id }: { id: string }) => {
  const { daily } = useGetDailyDetailById({ id });

  return (
    <DailyDetailPresenter
      id={id}
      date={daily.date}
      account={daily.account}
      genre={daily.genre}
      category={daily.category}
      amount={daily.amount}
      memo={daily.memo ?? ""}
    />
  );
};
