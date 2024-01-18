export type EditableProps<T> = {
  value: T;
  setValue: (value: T) => void;
  disabled?: boolean;
  defaultValue?: T;
};
