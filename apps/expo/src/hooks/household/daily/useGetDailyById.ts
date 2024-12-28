import { useGetDailyDetailByIdQuery } from "@v3/graphql/household";

import type { Daily } from "~/hooks/household/daily/daily";
import type { IocomeType } from "~/types/iocome-type";

export const useGetDailyById = ({ id }: { id: string }) => {
  const [{ data, fetching: loading }] = useGetDailyDetailByIdQuery({
    variables: {
      id,
    },
  });

  const daily: Daily = {
    id: data?.daily?.id ?? "",
    date: data?.daily?.date ? new Date(data?.daily?.date) : undefined,
    account: data?.daily?.account ?? { id: "", name: "" },
    amount: (data?.daily?.amount as number) ?? 0,
    category: data?.daily?.category ?? { id: "", name: "" },
    genre: {
      id: data?.daily?.genre?.id ?? "",
      name: data?.daily?.genre?.name ?? "",
      iocomeType: data?.daily?.genre?.iocomeType as IocomeType,
    },
    memo: data?.daily?.memo ?? null,
  };

  return { daily, loading };
};
