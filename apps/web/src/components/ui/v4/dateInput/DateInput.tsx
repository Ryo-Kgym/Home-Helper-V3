import { DatePickerInput } from "@mantine/dates";

import { FieldContainer } from "../FieldContainer";
import { FieldValueProps } from "../property";

export const DateInput = ({
  label,
  value,
  setValue,
  required = false,
  placeholder,
  disabled,
}: FieldValueProps<Date | null>) => {
  const requiredStyle = required && !value ? "bg-red-100" : "bg-inherit";

  return (
    <FieldContainer label={label}>
      <DatePickerInput
        value={value}
        onChange={setValue}
        disabled={disabled}
        placeholder={placeholder}
        className={requiredStyle}
        firstDayOfWeek={0}
        locale="ja"
      />
    </FieldContainer>
  );
};
