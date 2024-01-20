import { Alert } from "react-native";

export const useAlert = () => {
  const alertBuilder = ({
    title,
    message,
    cancelCallback = () => undefined,
    okCallback,
  }: {
    title: string;
    message?: string;
    cancelCallback?: () => void;
    okCallback: () => void;
  }) => {
    Alert.alert(title, message, [
      {
        text: "Cancel",
        onPress: cancelCallback,
        style: "cancel",
      },
      {
        text: "OK",
        onPress: okCallback,
      },
    ]);
  };

  return { alertBuilder };
};
