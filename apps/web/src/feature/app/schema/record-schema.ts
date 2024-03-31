import { fieldKindSchema } from "@feature/app/schema/app-schema";
import { z } from "zod";

export const recordColumnSchema = z.object({
  fieldKind: fieldKindSchema,
  value: z.string(),
  options: z
    .object({
      label: z.string(),
    })
    .optional(),
});

export type RecordColumn = z.infer<typeof recordColumnSchema>;

export const columnsSchema = z.record(recordColumnSchema); // fieldId

export type Columns = z.infer<typeof columnsSchema>;

export const recordsSchema = z.record(
  z.object({
    recordId: z.string(),
    isEditing: z.boolean().default(false),
    columns: columnsSchema,
  }),
); // record.index

export type Records = z.infer<typeof recordsSchema>;
