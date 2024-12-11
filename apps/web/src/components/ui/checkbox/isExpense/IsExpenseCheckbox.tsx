import { FC } from "react";

import { CheckboxProps } from "../props";
import { Checkbox } from "../v5/Checkbox";

type Props = Pick<CheckboxProps, "checked" | "onChange">;

export const IsExpenseCheckbox: FC<Props> = ({ checked, onChange }) => (
  <Checkbox
    id={"isExpense"}
    label={"経費計上する"}
    checked={checked}
    onChange={onChange}
  />
);
