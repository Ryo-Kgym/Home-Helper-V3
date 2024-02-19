import type { FavoriteFilterArgKey } from "../favorite-filter-type";
import { CategoryIdInput, YearInput } from "./_input";

export const FavoriteFilterArgValueInput = ({
  argKey,
  value,
  setValue,
}: {
  argKey: FavoriteFilterArgKey;
} & FavoriteFilterArgValueInputProps) =>
  inputMap[argKey].Component({ value, setValue });

const inputMap: {
  [key in FavoriteFilterArgKey]: {
    Component: FavoriteFilterArgValueInputComponent;
  };
} = {
  categoryId: {
    Component: CategoryIdInput,
  },
  year: {
    Component: YearInput,
  },
};

export type FavoriteFilterArgValueInputProps = {
  value: string;
  setValue: (value: string) => void;
};

export type FavoriteFilterArgValueInputComponent =
  React.FC<FavoriteFilterArgValueInputProps>;
