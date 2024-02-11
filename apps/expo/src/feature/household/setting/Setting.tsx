import { FlatList, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { paths } from "~/app/paths";

export const Setting = () => {
  const { push } = useRouter();
  const data = [
    {
      href: paths.household.setting.dashboard,
      label: "ダッシュボード",
    },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Pressable
          style={{
            alignItems: "center",
            borderStyle: "solid",
            borderBottomWidth: 0.5,
            borderColor: "gray",
            paddingTop: 10,
            paddingBottom: 8,
          }}
          onPress={() => push(item.href)}
        >
          <View>
            <Text className={"text-xl"}>{item.label}</Text>
          </View>
        </Pressable>
      )}
    ></FlatList>
  );
};
