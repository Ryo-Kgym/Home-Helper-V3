import type { ReactNode } from "react";

import { FieldFrame } from "./FieldFrame";
import { FieldLabel } from "./FieldLabel";

export const FieldContainer = ({
  label,
  children: component,
}: {
  label: string;
  children: ReactNode;
}) => (
  <div>
    <FieldLabel>{label}</FieldLabel>
    <FieldFrame>{component}</FieldFrame>
  </div>
);
