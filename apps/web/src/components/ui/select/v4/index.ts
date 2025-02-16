import type { FieldValueProps } from "../../v4/property";

export { Select } from "./Select";

export type SelectProps<T extends string | number> = {
  data: { label: string; value: T }[];
} & FieldValueProps<T>;
