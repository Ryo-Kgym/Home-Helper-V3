import type { FavoriteFilterArgValueInputComponent } from "../FavoriteFilterArgValueInput";
import { Picker } from "~/ui/Picker";

export const YearInput: FavoriteFilterArgValueInputComponent = ({
  value,
  setValue,
}) => (
  <Picker
    value={value}
    setValue={setValue}
    data={[
      { value: "2021", label: "2021" },
      { value: "2022", label: "2022" },
    ]}
  />
);
