/**
 * @deprecated
 */
export { MantineButton as Button } from "./MantineButton";

/**
 * @deprecated
 */
export type ButtonProps = {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  type?: ButtonColorType;
};

/**
 * @deprecated
 */
export type ButtonColorType =
  | "default"
  | "register"
  | "update"
  | "add"
  | "back"
  | "clear"
  | "reset"
  | "detail"
  | "import"
  | "delete"
  | "done"
  | "cancel";
