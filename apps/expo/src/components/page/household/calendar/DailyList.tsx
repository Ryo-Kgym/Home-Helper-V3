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
      <View key={detail.id} className={"flex-row"}>
        <Text>{detail.accountName}</Text>
        <Text>{detail.amount.toLocaleString()}円</Text>
        <Text>{detail.categoryName}</Text>
        <Text>{detail.genreName}</Text>
      </View>
    ))}
  </View>
);
