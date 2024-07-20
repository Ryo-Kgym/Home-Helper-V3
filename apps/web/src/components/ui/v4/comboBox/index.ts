import { Dispatch, SetStateAction } from "react";

export { MantineComboBox as ComboBox } from "./MantineComboBox";

/**
 * @package
 */
export type ComboBoxProps = {
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
  data: Record<
    string,
    {
      value: string;
      label: string;
    }[]
  >;
  label?: string;
};
