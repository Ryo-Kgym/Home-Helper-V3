import { useRouter } from "expo-router";
import { useGetDailyDetailByDateAccountIdQuery } from "@/turbo/graphql/household";

import type { IocomeType } from "~/types/iocome-type";
import { paths } from "~/app/paths";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { Details } from "~/ui";

export const DetailListByAccountContainer = ({
  accountId,
}: {
  accountId: string;
}) => {
  const { groupId } = useSaveGroupId();
  const { push } = useRouter();
  const [{ data }] = useGetDailyDetailByDateAccountIdQuery({
    variables: {
      accountId,
      groupId,
      fromDate: "2019-01-01",
      toDate: "2099-12-31",
    },
  });

  const details =
    data?.dailyDetailByDateList.map((d) => ({
      id: d.id,
      date: d.date ? new Date(d.date) : null,
      accountId: d.accountByAccountId.accountId,
      accountName: d.accountByAccountId.accountName,
      amount: (d.amount as number) ?? 0,
      categoryName: d.categoryByCategoryId.categoryName,
      genreName: d.categoryByCategoryId.genreByGenreId.genreName,
      iocomeType: d.categoryByCategoryId.genreByGenreId
        .iocomeType as IocomeType,
      redirectHandler: () => push(paths.household.daily(d.id) as "/"),
      memo: d.memo ?? null,
    })) ?? [];

  return <Details details={details} />;
};
