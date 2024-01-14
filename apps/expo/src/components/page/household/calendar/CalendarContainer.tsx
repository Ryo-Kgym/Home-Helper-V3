import { useState } from "react";
import { useGetDailyDetailByDateQuery } from "@/turbo/graphql/household";

import { DailyList } from "~/components/page/household/calendar/DailyList";
import { generateCalendar } from "~/components/page/household/calendar/generate-calendar";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { CalendarPresenter } from "./CalendarPresenter";

export const CalendarContainer = () => {
  const today = new Date("2024-01-01");
  const { groupId } = useSaveGroupId();

  const [date] = useState(today);

  const days = generateCalendar(today).map((day) => ({
    date: day,
    isToday:
      day.toISOString().slice(0, 10) === today.toISOString().slice(0, 10),
  }));

  const [{ data: detailData }] = useGetDailyDetailByDateQuery({
    variables: {
      groupId,
      fromDate: date.toISOString().slice(0, 10),
      toDate: date.toISOString().slice(0, 10),
    },
  });

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
