import { Pressable, Text } from "react-native";
import { Link } from "expo-router";

import type { LinkProps } from "~/components/ui";

export const ExpoRouterLink = ({ label, path, size = "md" }: LinkProps) => {
  const sizeClass = SizeMap[size];
  return (
    <Pressable className={"rounded-2xl border-2 p-4"}>
      <Link href={path as `./`}>
        <Text className={`${sizeClass}`}>{label}</Text>
      </Link>
    </Pressable>
  );
};

const SizeMap = {
  sm: "text-md",
  md: "text-xl",
  lg: "text-2xl",
};
