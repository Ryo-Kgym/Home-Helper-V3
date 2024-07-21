/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

export { MantineButton as Button } from "./MantineButton";

export type ButtonProps = {
  onClick: () => void;
  colorType?: ButtonColorType;
  label?: string;
  disabled?: boolean;
};

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
