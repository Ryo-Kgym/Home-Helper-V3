import { useGetDailyDetailByDateQuery } from "@/turbo/graphql/household";

import type { DailyDetail } from "~/hooks/household/dailyDetail/daily-detail";
import type { IocomeType } from "~/types/iocome-type";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";

export const useGetDailyDetailList = ({
  fromDate,
  toDate,
}: {
  fromDate: Date;
  toDate: Date;
}) => {
  const { groupId } = useSaveGroupId();

  const [{ data: detailData }] = useGetDailyDetailByDateQuery({
    variables: {
      groupId,
      fromDate: fromDate.toISOString().slice(0, 10),
      toDate: toDate.toISOString().slice(0, 10),
    },
  });

  const dailyDetailList: DailyDetail[] =
    detailData?.dailyDetailByDateList.map((detail) => ({
      id: detail.id,
      accountName: detail.accountByAccountId.accountName,
      amount: detail.amount as number,
      categoryName: detail.categoryByCategoryId.categoryName,
      genreName: detail.categoryByCategoryId.genreByGenreId.genreName,
      iocomeType: detail.categoryByCategoryId.genreByGenreId
        .iocomeType as IocomeType,
      memo: detail.memo ?? null,
    })) ?? [];

  return { dailyDetailList };
};
