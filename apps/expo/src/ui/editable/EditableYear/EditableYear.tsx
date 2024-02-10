import type { EditableProps } from "~/ui/editable/editable-props";
import { Picker } from "~/ui/Picker";

export const EditableYear = ({
  value,
  setValue,
}: EditableProps<number> & { range?: { min: number; max: number } }) => {
  return <Picker value={value} setValue={setValue} data={[]} />;
};
