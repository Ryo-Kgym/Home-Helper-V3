import { Text } from "react-native";

import type { EditableProps } from "~/ui/editable/editable-props";

export const EditableCategory = ({
  value,
  className = "",
}: EditableProps<string> & {
  defaultValue: string;
  genreId: string;
}) => {
  return <Text className={className}>{value}</Text>;
};
