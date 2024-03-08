import { z } from "zod";

export const recordSchema = z.record(
  z.object({
    fieldKind: z.enum(["text", "selectBox", "multipleText"]),
    value: z.string(),
  }),
);

export type Record = z.infer<typeof recordSchema>;

export const recordListSchema = z.record(recordSchema);

export type RecordList = z.infer<typeof recordListSchema>;
