import { TextInputPresenter } from "@components/atoms/Input/TextField/TextInputPresenter";
import { ChangeEvent } from "react";
import { InputValidator } from "@components/atoms/Input/InputValidator";

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
  const onChangeHandler = (event: any) => {
    onChange(event.target.value);
  };

  const errorMessage = validator.result ? validator.message : "";

  return (
    <TextInputPresenter
      label={label}
      type={type}
      value={value}
      onChangeHandler={onChangeHandler}
      errorMessage={errorMessage}
      placeholder={placeholder}
    />
  );
};
