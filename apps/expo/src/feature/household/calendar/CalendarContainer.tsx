import { useEffect, useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

import { paths } from "~/app/paths";
import { DailyList, Total } from "~/feature/household/daily";
import { useGetDailyDetailList } from "~/hooks/household/dailyDetail/useGetDailyDetailList";
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

  const { dailyDetailList, incomeTotal, outcomeTotal } = useGetDailyDetailList({
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
