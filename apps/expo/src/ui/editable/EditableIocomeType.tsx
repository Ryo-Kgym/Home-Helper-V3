import type { IocomeType } from "~/types/iocome-type";
import type { EditableProps } from "~/ui/editable/editable-props";
import { SegmentedControl } from "../SegmentedControl";

export const EditableIocomeType = ({
  value,
  setValue,
}: EditableProps<IocomeType>) => {
  const data = [
    {
      value: "INCOME" as IocomeType,
      label: "収入",
    },
    {
      value: "OUTCOME" as IocomeType,
      label: "支出",
    },
  ];
  return <SegmentedControl value={value} setValue={setValue} data={data} />;
};
