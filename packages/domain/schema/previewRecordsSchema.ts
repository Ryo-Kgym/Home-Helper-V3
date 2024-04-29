import { z } from "zod";

import { fieldKindSchema } from "./appSchema";

export const previewColumnSchema = z.object({
  fieldKind: fieldKindSchema,
  originalValue: z.string().optional(),
  value: z.string().or(z.undefined()),
  errorMessage: z.string().or(z.undefined()),
});

export const previewColumnsSchema = z.record(previewColumnSchema); // fieldId

export type PreviewRecordColumn = z.infer<typeof previewColumnsSchema>;

export const previewRecordsSchema = z.record(
  z.object({
    recordId: z.string(),
    isEditing: z.boolean().default(false),
    columns: previewColumnsSchema,
  }),
); // record.index

export type PreviewRecords = z.infer<typeof previewRecordsSchema>;
