import { useGetDailyDetailByIdQuery } from "@/turbo/graphql/household";

import type { Daily } from "~/hooks/household/daily/daily";
import type { IocomeType } from "~/types/iocome-type";

export const useGetDailyById = ({ id }: { id: string }) => {
  const [{ data, fetching: loading }] = useGetDailyDetailByIdQuery({
    variables: {
      id,
    },
  });

  const daily: Daily = {
    id: data?.dailyDetail?.id ?? "",
    date: data?.dailyDetail?.date
      ? new Date(data?.dailyDetail?.date)
      : undefined,
    account: data?.dailyDetail?.account ?? { id: "", name: "" },
    amount: (data?.dailyDetail?.amount as number) ?? 0,
    category: data?.dailyDetail?.category ?? { id: "", name: "" },
    genre: {
      id: data?.dailyDetail?.genre?.id ?? "",
      name: data?.dailyDetail?.genre?.name ?? "",
      iocomeType: data?.dailyDetail?.genre?.iocomeType as IocomeType,
    },
    memo: data?.dailyDetail?.memo ?? null,
  };

  return { daily, loading };
};
