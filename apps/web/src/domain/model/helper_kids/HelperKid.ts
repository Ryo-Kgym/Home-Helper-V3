/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

export type HelperKid = {
  id: string;
  name: string;
};

export const HelperKid = {
  of: (id: string, name: string, nameSuffix: string): HelperKid => ({
    id,
    name: `${name} ${nameSuffix}`,
  }),

  empty: (): HelperKid => ({
    id: "",
    name: "",
  }),
};
