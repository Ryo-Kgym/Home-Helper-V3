import type { ChangeEvent } from "react";
import { TextInput } from "@mantine/core";

import type { InputValidator } from "~/components/atoms/Input/InputValidator";

type TextInputContainerProps = {
  label: string;
  type?: "text" | "number";
  value: string | number;
  onChange: (_: ChangeEvent<HTMLInputElement>) => void;
  validator?: InputValidator;
  placeholder?: string;
};
export const TextInputContainer = ({
  label,
  type = "text",
  value,
  onChange,
  validator = { result: false, message: "" },
  placeholder = "",
}: TextInputContainerProps) => {
  const errorMessage = validator.result ? validator.message : "";

  return (
    <TextInput
      label={label}
      type={type}
      error={errorMessage}
      value={value}
      onChange={onChange}
      size={"xl"}
      placeholder={placeholder}
    />
  );
};
