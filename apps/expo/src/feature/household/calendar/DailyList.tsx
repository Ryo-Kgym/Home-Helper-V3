import { FlatList, Text, View } from "react-native";

export const DailyList = ({
  details,
}: {
  details: {
    id: string;
    accountName: string;
    amount: number;
    categoryName: string;
    genreName: string;
  }[];
}) => (
  <View className={"h-1/2"}>
    <FlatList
      data={details}
      keyExtractor={(item) => item.id}
      renderItem={(detail) => (
        <View
          className={
            "flex-row items-center border-b border-b-gray-400 px-3 py-2"
          }
        >
          <View className={"w-2/3 "}>
            <Text className={"text-xl"}>{detail.item.categoryName}</Text>
            <View className={"flex-row items-center"}>
              <Text className={"text-gray-600"}>
                {detail.item.genreName + "  "}
              </Text>
              <Text className={"text-gray-600"}>{detail.item.accountName}</Text>
            </View>
          </View>
          <Text className={"w-1/3 text-right text-xl"}>
            {detail.item.amount.toLocaleString()}円
          </Text>
        </View>
      )}
    />
  </View>
);
