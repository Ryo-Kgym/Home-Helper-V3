import { FieldFrame } from "@components/ui/v4/FieldFrame";
import { FieldLabel } from "@components/ui/v4/FieldLabel";

import type { ReactNode } from "react";

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
