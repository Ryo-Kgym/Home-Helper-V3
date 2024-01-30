import { Pressable, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export const ButtonFilter = ({
  pressHandler,
}: {
  pressHandler: () => void;
}) => (
  <Pressable
    onPress={pressHandler}
    style={{
      zIndex: 100,
      position: "absolute",
      bottom: 10,
      right: 50,
    }}
  >
    <View
      className={
        "h-16 w-16 flex-1 items-center justify-center rounded-full bg-neutral-100 shadow-xl"
      }
    >
      <Feather name="filter" size={24} color="black" />
    </View>
  </Pressable>
);
