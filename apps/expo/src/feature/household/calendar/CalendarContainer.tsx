import { useEffect, useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { useGetDailyDetailByDateQuery } from "@/turbo/graphql/household";

import { paths } from "~/app/paths";
import { DailyList } from "~/feature/household/daily";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { CalendarPresenter } from "./CalendarPresenter";
import { generateCalendar } from "./generate-calendar";

export const CalendarContainer = ({ baseDate }: { baseDate: Date }) => {
  const { push } = useRouter();
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

  const changeBaseDate = (date: Date) =>
    push(paths.household.calendar(date) as "/");

  useEffect(() => setDate(baseDate), [baseDate]);

  return (
    <>
      <CalendarPresenter changeBaseDate={changeBaseDate} days={days} />
      <View className={"h-1/2"}>
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
      </View>
    </>
  );
};
