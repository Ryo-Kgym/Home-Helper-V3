import { Text } from "react-native";

import type { FavoriteFilterArgKey } from "../favorite-filter-type";

export const FavoriteFilterArgValueInput = ({
  argKey,
  value,
  setValue,
}: {
  argKey: FavoriteFilterArgKey;
  value: string;
  setValue: (value: string) => void;
}) => inputMap[argKey].Component({ value, setValue });

const inputMap: {
  [key in FavoriteFilterArgKey]: {
    Component: React.FC<{
      value: string;
      setValue: (value: string) => void;
    }>;
  };
} = {
  categoryId: {
    Component: () => <Text>categoryId</Text>,
  },
  year: {
    Component: () => <Text>year</Text>,
  },
};
