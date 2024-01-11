/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

export { MantineMonthPicker as MonthPicker } from "./MantineMonthPicker";

export type MantineMonthPickerProps = {
  value: Date | null;
  setValue: (_: Date | null) => void;
  label?: string;
  clearable?: boolean;
  isLastDay?: boolean;
};
