import { useEffect, useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

import { paths } from "~/app/paths";
import { useGetCreditCardSummaryList } from "~/hooks/household/credit_card/useGetCreditCardSummaryList";
import { useGetDailyList } from "~/hooks/household/daily/useGetDailyList";
import { Details, Total } from "~/ui";
import { CalendarPresenter } from "./CalendarPresenter";
import { generateCalendar } from "./generate-calendar";

export const CalendarContainer = ({ baseDate }: { baseDate: Date }) => {
  const { push } = useRouter();
  const today = new Date();
  const [date, setDate] = useState<Date>(baseDate);

  const days = generateCalendar(baseDate).map((day) => ({
    date: day,
    isToday:
      day.toISOString().slice(0, 10) === today.toISOString().slice(0, 10),
    isThisMonth: day.getMonth() === baseDate.getMonth(),
    isSelectedDate:
      date.toISOString().slice(0, 10) === day.toISOString().slice(0, 10),
  }));

  const { dailyDetailList, incomeTotal, outcomeTotal } = useGetDailyList({
    fromDate: date,
    toDate: date,
  });

  const { creditCardSummaryList } = useGetCreditCardSummaryList({
    fromDate: date,
    toDate: date,
  });

  const changeHandler = (date: Date) =>
    push(paths.household.calendar(date) as "/");

  useEffect(() => setDate(baseDate), [baseDate]);

  return (
    <>
      <CalendarPresenter
        baseDate={date}
        changeHandler={changeHandler}
        days={days}
      />
      <Total income={incomeTotal} outcome={outcomeTotal} />
      <View className={"h-[38vh]"}>
        <Details
          details={dailyDetailList
            .map((detail) => ({
              id: detail.id,
              accountName: detail.account.name,
              amount: detail.amount,
              genreName: detail.genre.name,
              categoryName: detail.category.name,
              iocomeType: detail.genre.iocomeType,
            }))
            .concat(
              creditCardSummaryList.map((summary) => ({
                id: summary.id,
                accountName: summary.account.name,
                amount: summary.total,
                genreName: summary.genre.name,
                categoryName: summary.category.name,
                iocomeType: summary.genre.iocomeType,
              })),
            )}
        />
      </View>
    </>
  );
};
