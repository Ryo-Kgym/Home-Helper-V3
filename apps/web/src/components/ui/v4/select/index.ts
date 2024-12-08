import type { FieldValueProps } from "~/components/ui/v4/property";

export { Select } from "~/components/ui/v4/select/Select";

export type SelectProps<T extends string | number> = {
  data: { label: string; value: T }[];
} & FieldValueProps<T>;
