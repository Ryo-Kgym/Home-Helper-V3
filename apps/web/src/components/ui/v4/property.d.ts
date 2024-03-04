export type FieldProps<T> = {
  label: string;
  value: T;
  setValue: (value: T) => void;
};
