import { View } from "react-native";

import type { ReactNode } from "react";

export const FiledFrame = ({ children }: { children: ReactNode }) => {
  return (
    <View
      className={"rounded-xl border-2 border-gray-200 bg-gray-100 px-2 pb-2"}
    >
      {children}
    </View>
  );
};
