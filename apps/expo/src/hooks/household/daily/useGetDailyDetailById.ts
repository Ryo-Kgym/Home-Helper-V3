import { useGetDailyDetailByIdQuery } from "@/turbo/graphql/household";

import type { Daily } from "~/hooks/household/daily/daily";
import type { IocomeType } from "~/types/iocome-type";

export const useGetDailyDetailById = ({ id }: { id: string }) => {
  const [{ data }] = useGetDailyDetailByIdQuery({
    variables: {
      id,
    },
  });

  const daily: Daily = {
    id: data?.dailyDetail?.id ?? "",
    accountName: data?.dailyDetail?.account.name ?? "",
    amount: (data?.dailyDetail?.amount as number) ?? 0,
    categoryName: data?.dailyDetail?.category.name ?? "",
    genreName: data?.dailyDetail?.genre.name ?? "",
    iocomeType: data?.dailyDetail?.genre.iocomeType as IocomeType,
    memo: data?.dailyDetail?.memo ?? null,
  };

  return { daily };
};
