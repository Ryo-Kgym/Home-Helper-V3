import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import { AddFavoriteFilterArg } from "~/feature/household/setting/favoriteFilter/addArg/AddFavoriteFilterArg";
import { Modal, RegisterButton } from "~/ui";
import { useGetFavoriteFilter } from "./useGetFavoriteFilter";

export const FavoriteFilterDetail = ({ filterId }: { filterId: string }) => {
  const { getFavoriteFilterArgs } = useGetFavoriteFilter(filterId);

  const [addVisible, setAddVisible] = useState(false);

  const deleteHandler = (id: string) => undefined;

  return (
    <View>
      <SwipeListView
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
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text className={"text-xl text-gray-500"}>{item.key}</Text>
              <Text className={"text-md text-right"}>{item.label}</Text>
            </View>
          </Pressable>
        )}
        renderHiddenItem={(data) => (
          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
            onPress={() => deleteHandler(data.item.id)}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: "red",
                width: 75,
                paddingTop: 10,
                paddingBottom: 8,
              }}
            >
              <Text className={"text-center text-xl text-white"}>削除</Text>
            </View>
          </Pressable>
        )}
        // leftOpenValue={75}
        rightOpenValue={-75}
      />
      <RegisterButton registerHandler={() => setAddVisible(true)} />
      <Modal visible={addVisible} setVisible={setAddVisible}>
        <AddFavoriteFilterArg filterId={filterId} />
      </Modal>
    </View>
  );
};
