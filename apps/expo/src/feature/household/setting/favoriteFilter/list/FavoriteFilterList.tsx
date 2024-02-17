import { FlatList, Pressable, Text, View } from "react-native";
import { useGetFavoriteFiltersQuery } from "@v3/graphql/household";

import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";

export const FavoriteFilterList = () => {
  const { groupId } = useSaveGroupId();

  const [{ data }] = useGetFavoriteFiltersQuery({ variables: { groupId } });

  const favoriteFilters =
    data?.filters.map((f) => ({
      id: f.id,
      name: f.name,
    })) ?? [];

  return (
    <View>
      <FlatList
        data={favoriteFilters}
        keyExtractor={({ id }) => id as string}
        renderItem={({ item }) => (
          <Pressable
            style={{
              borderStyle: "solid",
              borderBottomWidth: 0.5,
              borderColor: "gray",
              paddingTop: 10,
              paddingBottom: 8,
              paddingLeft: 10,
            }}
          >
            <View>
              <Text className={"text-xl"}>{item.name}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};
