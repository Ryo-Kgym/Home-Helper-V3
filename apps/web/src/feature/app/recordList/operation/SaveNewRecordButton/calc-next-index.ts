import type { Records } from "@oneforall/domain/schema/recordSchema";

export const calcNextIndex = (records: Records) =>
  (Math.max(...Object.keys(records).map((n) => parseInt(n))) | 0) + 1;
