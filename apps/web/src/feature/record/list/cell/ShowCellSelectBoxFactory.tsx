import type { FieldOptionsSelectBox } from "@feature/app/schema";

export const ShowCellSelectBoxFactory = ({
  value,
  options,
}: {
  value: string;
  options: FieldOptionsSelectBox;
}) => {
  return <div>{options.selector.find((s) => s.value === value)?.label}</div>;
};
