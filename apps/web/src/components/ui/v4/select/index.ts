import { FieldValueProps } from "../property";

export { Select } from "./Select";

export type SelectProps<T extends string | number> = {
  data: { label: string; value: T }[];
} & FieldValueProps<T>;
