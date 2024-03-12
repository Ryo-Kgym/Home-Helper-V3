export { TailWindCSSButton as Button } from "./TailWindCSSButton";

export type ButtonProps = {
  label: string;
  clickHandler: () => void;
  disabled?: boolean;
  type: "create" | "add" | "reset" | "modify";
};
