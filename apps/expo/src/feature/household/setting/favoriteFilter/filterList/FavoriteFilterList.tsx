import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useGetFavoriteFiltersQuery } from "@v3/graphql/household";

import { paths } from "~/app/paths";
import { EditFavoriteFilter } from "~/feature/household/setting/favoriteFilter/filterEdit/EditFavoriteFilter";
import { RegisterFavoriteFilter } from "~/feature/household/setting/favoriteFilter/filterRegister/RegisterFavoriteFilter";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { Modal, RegisterButton } from "~/ui";

export const FavoriteFilterList = () => {
  const [registerVisible, setRegisterVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [editFilterId, setEditFilterId] = useState<string>("");

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
            onLongPress={() => {
              setEditFilterId(item.id);
              setEditVisible(true);
            }}
          >
            <View>
              <Text className={"text-xl"}>{item.name}</Text>
            </View>
          </Pressable>
        )}
      />
      <RegisterButton registerHandler={() => setRegisterVisible(true)} />
      <Modal visible={registerVisible} setVisible={setRegisterVisible}>
        <RegisterFavoriteFilter />
      </Modal>
      <Modal visible={editVisible} setVisible={setEditVisible}>
        <EditFavoriteFilter filterId={editFilterId} />
      </Modal>
    </View>
  );
};
