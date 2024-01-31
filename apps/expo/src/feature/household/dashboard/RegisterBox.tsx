import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { paths } from "~/app/paths";
import { DashboardFrame } from "~/feature/household/dashboard/DashboardFrame";

export const RegisterBox = () => {
  return (
    <DashboardFrame
      label={""}
      href={paths.household.registerDaily}
      size={"w-1/4"}
    >
      <View className={"ml-3"}>
        <AntDesign name="edit" size={48} color="gray" />
      </View>
    </DashboardFrame>
  );
};
