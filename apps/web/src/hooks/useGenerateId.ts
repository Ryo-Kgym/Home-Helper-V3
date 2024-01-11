/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ulid } from "ulid";

export const useGenerateId = () => {
  return { generate: ulid };
};
