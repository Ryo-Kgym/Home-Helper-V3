import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useGetFavoriteFiltersQuery } from "@v3/graphql/household";

import { paths } from "~/app/paths";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { Modal, RegisterButton } from "~/ui";
import { RegisterFavoriteFilter } from "../addFilter/RegisterFavoriteFilter";

export const FavoriteFilterList = () => {
  const [addVisible, setAddVisible] = useState(false);

  const { push } = useRouter();
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
            }}
            onPress={() => {
              push(
                paths.household.setting.favoriteFilterDetail({
                  id: item.id,
                  name: item.name,
                }),
              );
            }}
          >
            <View>
              <Text className={"text-xl"}>{item.name}</Text>
            </View>
          </Pressable>
        )}
      />
      <RegisterButton registerHandler={() => setAddVisible(true)} />
      <Modal visible={addVisible} setVisible={setAddVisible}>
        <RegisterFavoriteFilter />
      </Modal>
    </View>
  );
};
