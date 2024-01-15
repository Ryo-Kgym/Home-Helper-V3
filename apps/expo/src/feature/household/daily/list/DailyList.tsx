import { FlatList, Text, View } from "react-native";

import type { IocomeType } from "~/types/iocome-type";

export const DailyList = ({
  details,
}: {
  details: {
    id: string;
    accountName: string;
    amount: number;
    categoryName: string;
    genreName: string;
    iocomeType: IocomeType;
  }[];
}) => (
  <FlatList
    data={details}
    keyExtractor={(item) => item.id}
    renderItem={({ item: detail }) => (
      <View
        className={"flex-row items-center border-b border-b-gray-400 px-3 py-2"}
      >
        <View className={"w-2/3 "}>
          <Text className={"text-xl"}>{detail.categoryName}</Text>
          <View className={"flex-row items-center"}>
            <Text className={"text-gray-600"}>{detail.genreName + "  "}</Text>
            <Text className={"text-gray-600"}>{detail.accountName}</Text>
          </View>
        </View>
        <Text
          className={`w-1/3 text-right text-xl ${
            detail.iocomeType === "INCOME" ? "text-green-500" : "text-red-500"
          }`}
        >
          {detail.amount.toLocaleString()}
        </Text>
      </View>
    )}
  />
);
