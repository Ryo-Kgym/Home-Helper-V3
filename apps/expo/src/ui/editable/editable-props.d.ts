export type EditableProps<T> = {
  value: T;
  setValue: (value: T) => void;
  className?: string;
  disabled?: boolean;
  defaultValue?: string;
};
