import { TextInput } from "@mantine/core";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";

type TextInputPresenterProps = {
  label: string;
  type: HTMLInputTypeAttribute;
  value: string | number;
  onChangeHandler: (_: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  placeholder: string;
};

export const TextInputPresenter = ({
  label,
  type,
  value,
  onChangeHandler,
  errorMessage,
  placeholder,
}: TextInputPresenterProps) => (
  <TextInput
    label={label}
    type={type}
    error={errorMessage}
    value={value}
    onChange={onChangeHandler}
    size={"xl"}
    placeholder={placeholder}
  />
);
