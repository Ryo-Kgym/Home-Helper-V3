import type { ComponentProps } from "react";
import { useRouter } from "expo-router";
import {
  OrderBy,
  useGetCreditCardSummaryByAccountIdBetweenDateQuery,
  useGetDailyByAccountIdQuery,
} from "@/turbo/graphql/household";

import type { CreditCard } from "~/types/credit-card";
import type { IocomeType } from "~/types/iocome-type";
import { paths } from "~/app/paths";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import {
  getCreditCardGenreName,
  getCreditCardName,
} from "~/hooks/household/credit_card/get-label";
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
  const [{ data: c }] = useGetCreditCardSummaryByAccountIdBetweenDateQuery({
    variables: {
      accountId,
      fromDate: "2019-01-01",
      toDate: "2099-12-31",
    },
  });

  const details: ComponentProps<typeof Details>["details"] = [
    ...(data?.dailies.map((d) => ({
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
    })) ?? []),
    ...(c?.allCreditCardSummariesList.map((d) => ({
      id: d.id,
      date: d.withdrawalDate ? new Date(d.withdrawalDate) : undefined,
      accountId: d.accountByAccountId.accountId,
      accountName: d.accountByAccountId.accountName,
      amount: (d.totalAmount as number) ?? 0,
      categoryName: getCreditCardName(d.creditCard as CreditCard),
      genreName: getCreditCardGenreName(),
      iocomeType: "OUTCOME" as IocomeType,
      redirectHandler: () => undefined,
      memo: null,
    })) ?? []),
  ];

  return <Details details={details} />;
};
