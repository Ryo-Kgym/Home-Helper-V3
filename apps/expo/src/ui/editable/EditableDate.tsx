import { Text } from "react-native";

import type { EditableProps } from "~/ui/editable/editable-props";

export const EditableDate = ({
  value,
  loadingValue,
}: EditableProps<Date | undefined> & { loadingValue: string }) => {
  return <Text>{value?.toISOString().slice(0, 10) ?? loadingValue}</Text>;
};
