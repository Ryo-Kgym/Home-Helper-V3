import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import { DashboardFrame } from "./DashboardFrame";

import { paths } from "~/app/paths";

export const ReloadBox = () => {
  return (
    <DashboardFrame label={""} href={paths.household.dashboard} size={"25%"}>
      <View className={"items-center justify-center"}>
        <Ionicons name="reload" size={48} color="gray" />
      </View>
    </DashboardFrame>
  );
};
