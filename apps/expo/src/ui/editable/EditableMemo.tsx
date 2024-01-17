import { Text } from "react-native";

import type { EditableProps } from "~/ui/editable/editable-props";

export const EditableMemo = ({
  value,
  className = "",
}: EditableProps<string | null>) => {
  return <Text className={className}>{value}</Text>;
};
