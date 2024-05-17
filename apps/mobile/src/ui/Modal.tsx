import { Button, Pressable, Modal as RNModal, Text, View } from "react-native";

export const Modal = ({
  title = "",
  visible,
  setVisible,
  children,
}: {
  title?: string;
  visible: boolean;
  setVisible: (val: boolean) => void;
  children: React.ReactNode;
}) => (
  <RNModal animationType={"fade"} visible={visible} transparent>
    <View
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Pressable onPress={() => setVisible(!visible)} style={{ flex: 1 }} />
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "black",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          marginHorizontal: 10,
          borderRadius: 10,
          paddingVertical: 8,
          paddingHorizontal: 10,
        }}
      >
        <View className={"flex-row items-center justify-between"}>
          <Text className={"text-center text-xl"}>{title}</Text>
          <Button onPress={() => setVisible(!visible)} title={"×"} />
        </View>
        {children}
      </View>
      <Pressable onPress={() => setVisible(!visible)} style={{ flex: 1 }} />
    </View>
  </RNModal>
);
