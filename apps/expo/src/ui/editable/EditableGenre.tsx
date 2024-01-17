import { Text } from "react-native";

import type { IocomeType } from "~/types/iocome-type";
import type { EditableProps } from "~/ui/editable/editable-props";

export const EditableGenre = ({
  value,
  className = "",
}: EditableProps<string> & {
  defaultValue: string;
  iocomeType: IocomeType;
}) => {
  return <Text className={className}>{value}</Text>;
};
