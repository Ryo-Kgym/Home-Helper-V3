import type { ReactNode } from "react";

export const FieldFrame = ({ children }: { children: ReactNode }) => (
  <div className={"rounded-md border-2 border-gray-300"}>{children}</div>
);
