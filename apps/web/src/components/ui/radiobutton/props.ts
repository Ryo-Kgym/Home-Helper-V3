export type RadioButtonProps<T extends string = string> = {
  id: string;
  label: string;
  onChange: (_: T) => void;
  checked: boolean;
};

export type RadioButtonGroupProps<T extends string = string> = {
  id: string;
  label: string;
  value: T;
  data: { label: string; value: T }[];
  orientation?: "vertical" | "horizontal";
} & Pick<RadioButtonProps<T>, "onChange">;
