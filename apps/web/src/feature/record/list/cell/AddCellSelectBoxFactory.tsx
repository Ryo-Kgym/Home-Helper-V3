import type { FieldOptionsSelectBox } from "@feature/app/schema";
import { Select } from "@components/ui/v4/select";

export const AddCellSelectBoxFactory = ({
  value,
  changeHandler,
  options,
}: {
  value: string;
  changeHandler: (value: string) => void;
  options: FieldOptionsSelectBox;
}) => {
  return (
    <Select
      label={""}
      value={value}
      setValue={changeHandler}
      data={options.selector}
    />
  );
};
