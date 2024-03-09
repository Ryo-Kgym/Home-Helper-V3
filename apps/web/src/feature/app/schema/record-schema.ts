import { fieldKindSchema } from "@feature/app/schema/app-schema";
import { z } from "zod";

export const recordColumnSchema = z.object({
  fieldKind: fieldKindSchema,
  value: z.string(),
  editing: z.boolean().default(false),
});

export type RecordColumn = z.infer<typeof recordColumnSchema>;

export const recordSchema = z.record(recordColumnSchema); // fieldId

export type Record = z.infer<typeof recordSchema>;

export const recordsSchema = z.record(
  z.object({
    recordId: z.string(),
    columns: recordSchema,
  }),
); // record.index

export type Records = z.infer<typeof recordsSchema>;
