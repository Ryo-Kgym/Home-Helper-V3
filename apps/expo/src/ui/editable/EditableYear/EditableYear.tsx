import type { EditableProps } from "../editable-props";
import { Picker } from "~/ui/Picker";
import { generateYearOptions } from "./generate-year-options";

export const EditableYear = ({
  value,
  setValue,
  range,
}: EditableProps<number> & { range?: { min: number; max: number } }) => {
  const { min, max } = range ?? { min: -10, max: 0 };
  return (
    <Picker
      value={value}
      setValue={setValue}
      data={generateYearOptions({ min, max })}
    />
  );
};
