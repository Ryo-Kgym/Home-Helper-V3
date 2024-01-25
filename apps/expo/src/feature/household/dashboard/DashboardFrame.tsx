import type { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export const DashboardFrame = ({
  label,
  children,
  href,
  size,
}: {
  label: string;
  children: ReactNode | ReactNode[];
  href: string;
  size: "w-full" | "w-1/2" | "w-1/3";
}) => (
  <Pressable className={`${size} px-1 py-2`}>
    <Link href={href as "/"}>
      <View
        className={
          "min-w-full rounded-2xl border-2 border-gray-400 bg-neutral-50 p-3 shadow-sm"
        }
      >
        <Text className={"text-xl "}>{label}</Text>
        {children}
      </View>
    </Link>
  </Pressable>
);
