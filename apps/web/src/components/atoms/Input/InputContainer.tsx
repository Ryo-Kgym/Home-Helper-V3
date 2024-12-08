import type { InputValidator } from "~/components/atoms/Input/InputValidator";
import { TextField } from "~/components/atoms/Input/TextField";

type InputContainerProps = {
  label: string;
  type?: "text" | "number";
  value: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (_: any) => void;
  validator?: InputValidator;
  placeholder?: string;
};

export const InputContainer = ({
  label,
  type = "text",
  value,
  onChange,
  validator,
  placeholder,
}: InputContainerProps) => (
  <TextField
    label={label}
    type={type}
    value={value}
    onChange={onChange}
    validator={validator}
    placeholder={placeholder}
  />
);
