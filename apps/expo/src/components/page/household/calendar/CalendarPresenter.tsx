import { FlatList, Text, View } from "react-native";
import { Stack } from "expo-router";

export const CalendarPresenter = ({
  days,
}: {
  days: {
    date: Date;
    isToday: boolean;
    isThisMonth: boolean;
    isSelectedDate: boolean;
  }[];
}) => (
  <View>
    <Stack.Screen options={{ title: "Calendar" }} />
    <View className={"w-full"}>
      <FlatList
        data={[
          { label: "日", color: "text-red-500" },
          { label: "月", color: "text-black" },
          { label: "火", color: "text-black" },
          { label: "水", color: "text-black" },
          { label: "木", color: "text-black" },
          { label: "金", color: "text-black" },
          { label: "土", color: "text-blue-500" },
        ]}
        numColumns={7}
        scrollEnabled={false}
        renderItem={(week) => (
          <View className={"w-[14.4%] border-b border-r border-gray-300"}>
            <Text className={`text-center ${week.item.color}`}>
              {week.item.label}
            </Text>
          </View>
        )}
      />
      <FlatList
        data={days}
        numColumns={7}
        scrollEnabled={false}
        renderItem={(day) => (
          <View
            className={`h-[3rem] w-[14.4%] border-b border-r border-gray-300 ${
              day.item.isToday ? "bg-orange-200" : ""
            } ${day.item.isThisMonth ? "" : "bg-gray-400"} ${
              day.item.isSelectedDate ? "bg-blue-200" : ""
            }`}
          >
            <Text className={"text-gray-600"}>
              {day.item.date.toISOString().slice(8, 10)}
            </Text>
          </View>
        )}
      />
    </View>
  </View>
);
