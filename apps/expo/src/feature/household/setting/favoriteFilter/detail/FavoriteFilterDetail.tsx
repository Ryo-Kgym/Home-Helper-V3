import { FlatList, Pressable, Text, View } from "react-native";

import { useGetFavoriteFilter } from "./useGetFavoriteFilter";

export const FavoriteFilterDetail = ({ filterId }: { filterId: string }) => {
  const { getFavoriteFilterArgs } = useGetFavoriteFilter(filterId);

  return (
    <View>
      <FlatList
        data={getFavoriteFilterArgs()}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Pressable
            style={{
              borderStyle: "solid",
              borderBottomWidth: 0.5,
              borderColor: "gray",
              paddingTop: 10,
              paddingBottom: 8,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text className={"text-xl text-gray-500"}>{item.type}</Text>
              <Text className={"text-right"}>{item.value}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};
