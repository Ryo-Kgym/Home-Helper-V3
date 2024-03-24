export type FieldOptionsFactoryProps = {
  options: Record<string, never>;
  setOptions: (options: Record<string, never>) => void;
  disabled?: boolean;
};
