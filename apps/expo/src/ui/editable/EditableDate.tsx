import { Text } from "react-native";

import type { EditableProps } from "~/ui/editable/editable-props";

export const EditableDate = ({
  value,
  className = "",
  loadingValue,
}: EditableProps<Date | undefined> & { loadingValue: string }) => {
  return (
    <Text className={className}>
      {value?.toISOString().slice(0, 10) ?? loadingValue}
    </Text>
  );
};
