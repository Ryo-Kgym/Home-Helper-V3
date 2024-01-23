import { useRouter } from "expo-router";
import {
  OrderBy,
  useGetDailyByAccountIdQuery,
} from "@/turbo/graphql/household";

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
  const [{ data }] = useGetDailyByAccountIdQuery({
    variables: {
      accountId,
      groupId,
      fromDate: "2019-01-01",
      toDate: "2099-12-31",
      orderBy: OrderBy.Desc,
    },
  });

  const details =
    data?.dailies.map((d) => ({
      id: d.id,
      date: d.date ? new Date(d.date) : undefined,
      accountId: d.account.id,
      accountName: d.account.name,
      amount: (d.amount as number) ?? 0,
      categoryName: d.category.name,
      genreName: d.genre.name,
      iocomeType: d.genre.iocomeType as IocomeType,
      redirectHandler: () => push(paths.household.daily(d.id) as "/"),
      memo: d.memo ?? null,
    })) ?? [];

  return <Details details={details} />;
};
