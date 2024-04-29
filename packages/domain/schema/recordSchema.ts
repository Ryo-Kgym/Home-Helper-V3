import { z } from "zod";

import { fieldKindSchema } from "./appSchema";

export const recordColumnSchema = z.object({
  fieldKind: fieldKindSchema,
  value: z.string(),
  options: z
    .object({
      label: z.string(),
    })
    .optional(),
});

export const columnsSchema = z.record(recordColumnSchema); // fieldId

export const recordsSchema = z.record(
  z.string(), // record.index
  z.object({
    recordId: z.string(),
    isEditing: z.boolean().default(false),
    columns: columnsSchema,
  }),
);

export type RecordColumn = z.infer<typeof recordColumnSchema>;
export type Columns = z.infer<typeof columnsSchema>;
export type Records = z.infer<typeof recordsSchema>;
export type Record = Records[number];
