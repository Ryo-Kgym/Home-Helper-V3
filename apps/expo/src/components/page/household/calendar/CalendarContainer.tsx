import { useState } from "react";
import { useGetDailyDetailByDateQuery } from "@/turbo/graphql/household";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { CalendarPresenter } from "./CalendarPresenter";
import { DailyList } from "./DailyList";
import { generateCalendar } from "./generate-calendar";

export const CalendarContainer = () => {
  const today = new Date();
  const { groupId } = useSaveGroupId();

  const [date, setDate] = useState<Date | undefined>(today);

  const days = generateCalendar(today).map((day) => ({
    date: day,
    isToday:
      day.toISOString().slice(0, 10) === today.toISOString().slice(0, 10),
    isThisMonth: day.getMonth() === today.getMonth(),
    isSelectedDate:
      date?.toISOString().slice(0, 10) === day.toISOString().slice(0, 10),
  }));

  const [{ data: detailData }] = useGetDailyDetailByDateQuery({
    variables: {
      groupId,
      fromDate: date?.toISOString().slice(0, 10),
      toDate: date?.toISOString().slice(0, 10),
    },
  });

  return (
    <>
      <DateTimePicker
        display={"default"}
        mode={"date"}
        accessible={true}
        value={date ?? today}
        onChange={(e, date) => setDate(date)}
      />
      <CalendarPresenter days={days} />
      <DailyList
        details={
          detailData?.dailyDetailByDateList.map((detail) => ({
            id: detail.id,
            accountName: detail.accountByAccountId.accountName,
            amount: detail.amount as number,
            categoryName: detail.categoryByCategoryId.categoryName,
            genreName: detail.categoryByCategoryId.genreByGenreId.genreName,
          })) ?? []
        }
      />
    </>
  );
};
