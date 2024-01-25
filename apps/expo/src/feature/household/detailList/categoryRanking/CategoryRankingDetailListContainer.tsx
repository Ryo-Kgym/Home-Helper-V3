import type { ComponentProps } from "react";
import { useRouter } from "expo-router";

import { paths } from "~/app/paths";
import { getMonth } from "~/func/date/get-month";
import { useGetCreditCardDetailList } from "~/hooks/household/credit_card/useGetCreditCardDetailList";
import { useGetDailyList } from "~/hooks/household/daily/useGetDailyList";
import { Details } from "~/ui";

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
    })),
  ].sort((a, b) => {
    if (!a.date || !b.date) return 0;
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
    return 0;
  });

  return <Details details={details} />;
};
