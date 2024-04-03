import { fieldKindSchema } from "@feature/app/schema/app-schema";
import { z } from "zod";

export const previewColumnSchema = z.object({
  fieldKind: fieldKindSchema,
  value: z.string(),
});

export const previewColumnsSchema = z.record(previewColumnSchema); // fieldId

export const previewRecordsSchema = z.record(
  z.object({
    recordId: z.string(),
    isEditing: z.boolean().default(false),
    columns: previewColumnsSchema,
  }),
); // record.index

export type PreviewRecords = z.infer<typeof previewRecordsSchema>;
