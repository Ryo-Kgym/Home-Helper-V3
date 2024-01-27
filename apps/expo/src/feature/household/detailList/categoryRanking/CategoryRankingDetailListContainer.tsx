import type { ComponentProps } from "react";
import { useRouter } from "expo-router";

import { paths } from "~/app/paths";
import { getMonth } from "~/func/date/get-month";
import { useGetCreditCardDetailList } from "~/hooks/household/credit_card/useGetCreditCardDetailList";
import { useGetDailyList } from "~/hooks/household/daily/useGetDailyList";
import { Details, sortBy } from "~/ui";

export const CategoryRankingDetailListContainer = ({
  yyyyMM,
}: {
  yyyyMM: Date;
}) => {
  const { firstDayOfMonth, lastDayOfMonth } = getMonth(yyyyMM);
  const { push } = useRouter();

  const { dailyDetailList } = useGetDailyList({
    fromDate: firstDayOfMonth,
    toDate: lastDayOfMonth,
  });
  const { creditCardDetailList } = useGetCreditCardDetailList({
    fromDate: firstDayOfMonth,
    toDate: lastDayOfMonth,
  });

  const details: ComponentProps<typeof Details>["details"] = [
    ...dailyDetailList.map((d) => ({
      id: d.id,
      date: d.date,
      accountName: d.account.name,
      amount: d.amount,
      categoryName: d.category.name,
      genreName: d.genre.name,
      iocomeType: d.genre.iocomeType,
      redirectHandler: () => {
        push(paths.household.daily(d.id) as "/");
      },
      memo: d.memo,
      type: "daily",
    })),
    ...creditCardDetailList.map((d) => ({
      id: d.id,
      date: d.date,
      accountName: d.account.name,
      amount: d.amount,
      categoryName: d.category.name,
      genreName: d.genre.name,
      iocomeType: d.genre.iocomeType,
      redirectHandler: () => undefined,
      memo: d.memo,
      type: "creditCardDetail",
    })),
  ].sort(sortBy.date.asc);

  return <Details details={details} />;
};
