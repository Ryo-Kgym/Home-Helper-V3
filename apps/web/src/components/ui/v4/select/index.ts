export { Select } from "@components/ui/v4/select/Select";

export type SelectProps<T extends string | number> = {
  value: T;
  setValue: (value: T) => void;
  data: { label: string; value: T }[];
};
