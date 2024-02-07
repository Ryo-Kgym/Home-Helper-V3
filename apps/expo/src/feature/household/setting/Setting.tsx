import { FlatList, Text, View } from "react-native";
import { Link } from "expo-router";

import { paths } from "~/app/paths";

export const Setting = () => {
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderStyle: "solid",
            borderBottomWidth: 0.5,
            borderColor: "gray",
            padding: 6,
          }}
        >
          <Link href={item.href}>
            <Text className={"text-xl"}>{item.label}</Text>
          </Link>
        </View>
      )}
    ></FlatList>
  );
};
