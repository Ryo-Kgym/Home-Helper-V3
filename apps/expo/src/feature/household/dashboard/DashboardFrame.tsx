import type { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export const DashboardFrame = ({
  label,
  children,
  href,
}: {
  label: string;
  children: ReactNode | ReactNode[];
  href: string;
}) => (
  <Pressable className={""}>
    <Link href={href as "/"}>
      <View className={"rounded-2xl border-2 border-gray-400 p-3"}>
        <Text className={"text-xl"}>{label}</Text>
        {children}
      </View>
    </Link>
  </Pressable>
);
