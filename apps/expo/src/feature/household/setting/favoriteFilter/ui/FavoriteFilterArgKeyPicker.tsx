import type { FavoriteFilterArgKey } from "../favorite-filter-type";
import { Picker } from "~/ui/Picker";
import { favoriteFilterArgKeyArray } from "../favorite-filter-type";

export const FavoriteFilterArgKeyPicker = ({
  value,
  setValue,
}: {
  value: FavoriteFilterArgKey;
  setValue: (value: FavoriteFilterArgKey) => void;
}) => (
  <Picker
    value={value}
    setValue={setValue}
    data={Object.keys(favoriteFilterArgKeyArray).map((k) => ({
      value: k as FavoriteFilterArgKey,
      label: favoriteFilterArgKeyArray[k as FavoriteFilterArgKey].label,
    }))}
  />
);
