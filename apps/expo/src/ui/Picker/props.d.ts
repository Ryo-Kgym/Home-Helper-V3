export type PickerProps<T> = {
  title?: string;
  value: T;
  setValue: (value: T) => void;
  data: { value: T; label: string }[];
  disabled?: boolean;
  description?: React.ReactNode;
};
