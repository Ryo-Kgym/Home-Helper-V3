import { Button, Modal as RNModal, Text, View } from "react-native";

export const Modal = ({
  visible,
  setVisible,
  children,
}: {
  visible: boolean;
  setVisible: (val: boolean) => void;
  children: React.ReactNode;
}) => (
  <RNModal animationType={"fade"} visible={visible} transparent>
    <View className={"flex-1 justify-center bg-black/30"}>
      <View className={"m-5 rounded-xl bg-neutral-100 px-3 pb-2 pt-1"}>
        <View className={"flex-row items-center justify-between"}>
          <Text className={"text-center text-xl"}>条件</Text>
          <Button onPress={() => setVisible(!visible)} title={"×"} />
        </View>
        {children}
      </View>
    </View>
  </RNModal>
);
