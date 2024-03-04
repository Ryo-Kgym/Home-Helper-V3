import type { ReactNode } from "react";

export const FieldLabel = ({ children: label }: { children: ReactNode }) => {
  return <div className={"text-sm"}>{label}</div>;
};
