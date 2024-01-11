/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

export { MantineCheckableSelect as CheckableSelect } from "./MantineCheckableSelect";

export type CheckableSelectProps<T extends { id: string }> = {
  values: T[];
  setValues: (value: T[]) => void;
  data: T[];
  converter: (t: T) => React.ReactNode | React.ReactNode[];
};
