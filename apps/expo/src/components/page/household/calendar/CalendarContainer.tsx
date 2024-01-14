import { useEffect, useState } from "react";
import { useGetDailyDetailByDateQuery } from "@/turbo/graphql/household";

import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { CalendarPresenter } from "./CalendarPresenter";
import { DailyList } from "./DailyList";
import { generateCalendar } from "./generate-calendar";

export const CalendarContainer = ({ baseDate }: { baseDate: Date }) => {
  const today = new Date();
  const { groupId } = useSaveGroupId();

  const [date, setDate] = useState<Date | undefined>(baseDate);

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

  useEffect(() => setDate(baseDate), [baseDate]);

  return (
    <>
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
