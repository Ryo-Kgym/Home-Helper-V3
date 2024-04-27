import { z } from "zod";

import { fieldKindSchema } from "./app-schema";

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
  z.string(), // record.index
  z.object({
    recordId: z.string(),
    isEditing: z.boolean().default(false),
    columns: columnsSchema,
  }),
);

export type Records = z.infer<typeof recordsSchema>;
export type Record = Records[number];
