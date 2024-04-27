/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import "dayjs/locale/ja";

import { DateInput, DatesProvider } from "@mantine/dates";

import type { MantineSize } from "@mantine/core";
import type { DateValue } from "@mantine/dates";

export const MantineDatePicker = ({
  value,
  onChange,
  label,
  defaultValue = new Date(),
  placeholder = "",
  size = "lg",
  disabled = false,
  required = false,
}: {
  value: Date;
  onChange: (_: Date) => void;
  label?: string;
  defaultValue?: Date;
  placeholder?: string;
  size?: MantineSize;
  disabled?: boolean;
  required?: boolean;
}) => {
  const error = required && value === null ? "Required" : "";

  const onChangeHandler = (value: DateValue) => {
    if (value instanceof Date) {
      onChange(value);
    }
  };
  return (
    <DatesProvider
      settings={{
        locale: "ja",
        firstDayOfWeek: 0,
        timezone: "Asia/Tokyo",
      }}
    >
      <DateInput
        value={new Date(value)}
        onChange={(value) => {
          console.log(value);
          onChangeHandler(value);
        }}
        label={label}
        defaultValue={defaultValue}
        placeholder={placeholder}
        withAsterisk={required}
        size={size}
        valueFormat="YYYY-MM-DD"
        monthLabelFormat={"YYYY-MM"}
        monthsListFormat={"MM"}
        error={error}
        disabled={disabled}
      />
    </DatesProvider>
  );
};
