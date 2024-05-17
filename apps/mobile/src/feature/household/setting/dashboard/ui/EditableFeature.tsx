import type { Feature } from "~/feature/household/setting/dashboard/type";
import type { EditableProps } from "~/ui/editable/editable-props";
import { featureMap } from "~/feature/household/setting/dashboard/list/feature-map";
import { Picker } from "~/ui/Picker";

const featureOptions = Object.keys(featureMap).map((f) => ({
  label: featureMap[f as Feature].label,
  value: f as Feature,
}));

export const EditableFeature = ({
  value,
  setValue,
  disabled,
}: EditableProps<Feature>) => (
  <Picker
    value={value}
    setValue={setValue}
    data={featureOptions}
    disabled={disabled}
  />
);
