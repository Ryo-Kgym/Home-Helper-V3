import type { ComponentProps } from "react";
import { useRouter } from "expo-router";
import {
  OrderBy,
  useGetCreditCardSummaryByAccountIdQuery,
  useGetDailyByAccountIdQuery,
} from "@v3/graphql/household";

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
  const [{ data: dailyDetail }] = useGetDailyByAccountIdQuery({
    variables: {
      accountId,
      groupId,
      fromDate: "2019-01-01",
      toDate: "2099-12-31",
      orderBy: OrderBy.Desc,
    },
  });
  const [{ data: creditCardSummary }] = useGetCreditCardSummaryByAccountIdQuery(
    {
      variables: {
        accountId,
        fromDate: "2019-01-01",
        toDate: "2099-12-31",
      },
    },
  );

  const details: ComponentProps<typeof Details>["details"] = [
    ...(dailyDetail?.dailies.map((d) => ({
      id: d.id,
      date: d.date ? new Date(d.date) : undefined,
      amount: (d.amount as number) ?? 0,
      categoryName: d.category.name,
      genreName: d.genre.name,
      iocomeType: d.genre.iocomeType as IocomeType,
      redirectHandler: () => push(paths.household.daily(d.id) as "/"),
      memo: d.memo ?? null,
    })) ?? []),
    ...(creditCardSummary?.creditCardSummaries.map((d) => ({
      id: d.id,
      date: d.withdrawalDate ? new Date(d.withdrawalDate) : undefined,
      amount: (d.totalAmount as number) ?? 0,
      categoryName: getCreditCardName(d.creditCard as CreditCard),
      genreName: getCreditCardGenreName(),
      iocomeType: "OUTCOME" as IocomeType,
      redirectHandler: () => undefined,
      memo: null,
    })) ?? []),
  ].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.getTime() - a.date.getTime();
  });

  return <Details details={details} />;
};
