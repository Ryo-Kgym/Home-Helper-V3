import { fieldKindSchema } from "@feature/app/schema/app-schema";
import { z } from "zod";

export const recordColumnSchema = z.object({
  fieldId: z.number(),
  fieldKind: fieldKindSchema,
  value: z.string(),
  editing: z.boolean().default(false),
});

export type RecordColumn = z.infer<typeof recordColumnSchema>;

export const recordSchema = z.record(recordColumnSchema);

export type Record = z.infer<typeof recordSchema>;

export const recordListSchema = z.record(recordSchema);

export type RecordList = z.infer<typeof recordListSchema>;
