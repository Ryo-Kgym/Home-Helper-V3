import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import { Modal, RegisterButton } from "~/ui";
import { AddFavoriteFilterArg } from "../add/AddFavoriteFilterArg";
import { useGetFavoriteFilter } from "./useGetFavoriteFilter";

export const FavoriteFilterDetail = ({ filterId }: { filterId: string }) => {
  const { getFavoriteFilterArgs } = useGetFavoriteFilter(filterId);

  const [addVisible, setAddVisible] = useState(false);

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
              <Text className={"text-gray-500"}>{item.key}</Text>
              <Text className={"text-right"}>{item.label}</Text>
            </View>
          </Pressable>
        )}
      />
      <RegisterButton registerHandler={() => setAddVisible(true)} />
      <Modal visible={addVisible} setVisible={setAddVisible}>
        <AddFavoriteFilterArg filterId={filterId} />
      </Modal>
    </View>
  );
};
