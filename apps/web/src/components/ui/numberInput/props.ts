export type Props = {
  label: string;
  value: number | "";
  onChange: (_: number) => void;
  placeholder?: string;
  withAsterisk?: boolean;
  disabled?: boolean;
  maxLength?: number;
};
