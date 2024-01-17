import { Text } from "react-native";

import type { EditableProps } from "~/ui/editable/editable-props";

export const EditableAccount = ({
  value,
  className = "",
}: EditableProps<string> & {
  defaultValue: string;
}) => {
  return <Text className={className}>{value}</Text>;
};
