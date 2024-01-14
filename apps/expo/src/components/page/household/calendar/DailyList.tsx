import { Text, View } from "react-native";

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
  <View>
    {details.map((detail) => (
      <View
        key={detail.id}
        className={"flex-row items-center border-b border-b-gray-400 px-3 py-2"}
      >
        <View className={"w-2/3 "}>
          <Text className={"text-xl"}>{detail.categoryName}</Text>
          <View className={"flex-row items-center"}>
            <Text className={"text-gray-600"}>{detail.genreName + "  "}</Text>
            <Text className={"text-gray-600"}>{detail.accountName}</Text>
          </View>
        </View>
        <Text className={"w-1/3 text-right text-xl"}>
          {detail.amount.toLocaleString()}円
        </Text>
      </View>
    ))}
  </View>
);
