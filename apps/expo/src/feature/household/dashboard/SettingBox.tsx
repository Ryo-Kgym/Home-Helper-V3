import { Octicons } from "@expo/vector-icons";
import { View } from "react-native";

import { DashboardFrame } from "./DashboardFrame";

import { paths } from "~/app/paths";

export const SettingBox = () => {
  return (
    <DashboardFrame label={""} href={paths.household.setting.root} size={"25%"}>
      <View className={"items-center justify-center"}>
        <Octicons name="gear" size={48} color="gray" />
      </View>
    </DashboardFrame>
  );
};
