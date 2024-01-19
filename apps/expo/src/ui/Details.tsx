import { FlatList, Pressable, Text, View } from "react-native";

import type { IocomeType } from "~/types/iocome-type";
import { Amount } from "~/ui/Amount";

export const Details = ({
  details,
}: {
  details: {
    id: string;
    accountName: string;
    amount: number;
    categoryName: string;
    genreName: string;
    iocomeType: IocomeType;
    redirectHandler: () => void;
  }[];
}) => (
  <FlatList
    data={details}
    keyExtractor={(item) => item.id}
    renderItem={({ item: detail }) => (
      <Pressable onPress={detail.redirectHandler}>
        <View
          className={
            "flex-row items-center border-b border-b-gray-400 px-3 py-2"
          }
        >
          <View className={"w-2/3 "}>
            <Text className={"text-xl"}>{detail.categoryName}</Text>
            <View className={"flex-row items-center"}>
              <Text className={"text-gray-600"}>{detail.genreName + "  "}</Text>
              <Text className={"text-gray-600"}>{detail.accountName}</Text>
            </View>
          </View>
          <View className={"w-1/3"}>
            <Amount iocomeType={detail.iocomeType} amount={detail.amount} />
          </View>
        </View>
      </Pressable>
    )}
  />
);
