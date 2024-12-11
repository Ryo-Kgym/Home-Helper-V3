import { Props } from "../props";
import { NumberInputPresenter } from "./NumberInputPresenter";

export const NumberInputContainer = ({
  label,
  value,
  onChange,
  placeholder,
  withAsterisk,
  disabled = false,
  maxLength = 9,
}: Props) => {
  const checkValue = (value: number | "") => {
    if (value === "") {
      return "Required";
    }
    if (String(value).length > maxLength) {
      return "Too long";
    }
    return "";
  };

  return (
    <NumberInputPresenter
      label={label}
      value={value}
      onChange={(value) => {
        if (typeof value === "string") {
          onChange(Number(value));
        } else {
          onChange(value);
        }
      }}
      placeholder={placeholder}
      error={checkValue(value)}
      withAsterisk={withAsterisk}
      disabled={disabled}
    />
  );
};
