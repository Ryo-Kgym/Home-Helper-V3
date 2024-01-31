import type { ReactNode } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";

export const DashboardFrame = ({
  label,
  children,
  href,
  size,
  scroll,
}: {
  label: string;
  children: ReactNode | ReactNode[];
  href: string;
  size: "w-full" | "w-1/2" | "w-1/3" | "w-1/4";
  scroll?: number;
}) =>
  scroll ? (
    <View className={`${size} px-1 py-0.5`}>
      <View
        className={
          "min-w-full rounded-2xl border-2 border-gray-400 bg-neutral-50 p-3 shadow-sm"
        }
      >
        <Pressable>
          <Link href={href as "/"}>
            <Text className={"text-lg"}>{label}</Text>
          </Link>
        </Pressable>
        <ScrollView style={{ maxHeight: scroll }}>
          <Pressable>
            <Link href={href as "/"}>{children}</Link>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  ) : (
    <Pressable className={`${size} px-1 py-0.5`}>
      <Link href={href as "/"}>
        <View
          className={
            "min-w-full rounded-2xl border-2 border-gray-400 bg-neutral-50 p-3 shadow-sm"
          }
        >
          <Text className={"text-lg"}>{label}</Text>
          {children}
        </View>
      </Link>
    </Pressable>
  );
