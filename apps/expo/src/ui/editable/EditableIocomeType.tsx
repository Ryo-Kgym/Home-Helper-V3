import { SegmentedControl } from "../SegmentedControl";

import type { IocomeType } from "~/types/iocome-type";
import type { EditableProps } from "~/ui/editable/editable-props";

import { getLabel, iocomeTypeArray } from "~/types/iocome-type";

export const EditableIocomeType = ({
  value,
  setValue,
  disabled = false,
}: EditableProps<IocomeType>) => {
  const data = iocomeTypeArray.map((value) => ({
    value,
    label: getLabel(value),
  }));

  return (
    <SegmentedControl
      value={value}
      setValue={setValue}
      data={data}
      disabled={disabled}
    />
  );
};
