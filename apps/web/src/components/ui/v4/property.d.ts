export type FieldValueProps<T> = {
  label: string;
  value: T;
  setValue: (value: T) => void;
};
