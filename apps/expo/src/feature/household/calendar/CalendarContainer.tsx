import { useEffect, useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

import { paths } from "~/app/paths";
import { DailyList } from "~/feature/household/daily";
import { useGetDailyDetailList } from "~/hooks/household/dailyDetail/useGetDailyDetailList";
import { CalendarPresenter } from "./CalendarPresenter";
import { generateCalendar } from "./generate-calendar";

export const CalendarContainer = ({ baseDate }: { baseDate: Date }) => {
  const { push } = useRouter();
  const today = new Date();
  const [date, setDate] = useState<Date>(baseDate);

  const days = generateCalendar(today).map((day) => ({
    date: day,
    isToday:
      day.toISOString().slice(0, 10) === today.toISOString().slice(0, 10),
    isThisMonth: day.getMonth() === today.getMonth(),
    isSelectedDate:
      date.toISOString().slice(0, 10) === day.toISOString().slice(0, 10),
  }));

  const { dailyDetailList } = useGetDailyDetailList({
    fromDate: date,
    toDate: date,
  });

  const changeBaseDate = (date: Date) =>
    push(paths.household.calendar(date) as "/");

  useEffect(() => setDate(baseDate), [baseDate]);

  return (
    <>
      <CalendarPresenter changeBaseDate={changeBaseDate} days={days} />
      <View className={"h-1/2"}>
        <DailyList
          details={dailyDetailList.map((detail) => ({
            id: detail.id,
            accountName: detail.accountName,
            amount: detail.amount,
            genreName: detail.genreName,
            categoryName: detail.categoryName,
            iocomeType: detail.iocomeType,
          }))}
        />
      </View>
    </>
  );
};
