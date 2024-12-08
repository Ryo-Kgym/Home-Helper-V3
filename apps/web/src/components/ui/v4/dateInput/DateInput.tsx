import { DatePickerInput } from "@mantine/dates";

import type { FieldValueProps } from "~/components/ui/v4/property";
import { FieldContainer } from "~/components/ui/v4/FieldContainer";

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
