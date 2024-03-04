import type { ReactNode } from "react";
import { FieldFrame } from "@components/ui/v4/FieldFrame";
import { FieldLabel } from "@components/ui/v4/FieldLabel";

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
