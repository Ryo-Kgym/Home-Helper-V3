import { TextField } from "@components/atoms/Input/TextField";
import { InputValidator } from "@components/atoms/Input/InputValidator";

type InputContainerProps = {
  label: string;
  type?: "text" | "number";
  value: string | number;
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
