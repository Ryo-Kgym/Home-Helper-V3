export type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  type:
    | "create"
    | "add"
    | "reset"
    | "modify"
    | "display"
    | "save"
    | "dangerous";
};
