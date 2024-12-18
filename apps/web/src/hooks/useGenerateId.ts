/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ulid } from "ulid";

/**
 * @deprecated {@link generateId} を使用してください。
 */
export const useGenerateId = () => {
  return { generate: ulid };
};
