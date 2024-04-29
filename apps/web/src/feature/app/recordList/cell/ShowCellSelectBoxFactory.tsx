import type { FieldOptionsSelectBox } from "@oneforall/domain/schema/recordSchema";

export const ShowCellSelectBoxFactory = ({
  value,
  options,
}: {
  value: string;
  options: FieldOptionsSelectBox;
}) => {
  return <div>{options.selector.find((s) => s.value === value)?.label}</div>;
};
