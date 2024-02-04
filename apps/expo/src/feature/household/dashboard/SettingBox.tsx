import { View } from "react-native";
import { Octicons } from "@expo/vector-icons";

import { paths } from "~/app/paths";
import { DashboardFrame } from "./DashboardFrame";

export const SettingBox = () => {
  return (
    <DashboardFrame label={""} href={paths.household.setting} size={"25%"}>
      <View className={"items-center justify-center"}>
        <Octicons name="gear" size={48} color="gray" />
      </View>
    </DashboardFrame>
  );
};
