import { z } from "zod";

import { fieldKindSchema } from "../appSchema";

export const viewRecordColumnSchema = z.object({
  fieldKind: fieldKindSchema,
  value: z.string(),
  options: z
    .object({
      label: z.string(),
    })
    .optional(),
});

const viewRecordColumnsSchema = z.record(
  z.string(), // fieldId
  viewRecordColumnSchema,
);

const viewRecordSchema = z.object({
  viewAppId: z.string(),
  appId: z.string(),
  appName: z.string(),
  recordId: z.string(),
  columns: viewRecordColumnsSchema,
});

export const viewRecordsSchema = z.record(
  z.string(), // appId + "-" + recordId
  viewRecordSchema,
);

export type ViewRecordColumn = z.infer<typeof viewRecordColumnSchema>;
export type ViewRecordColumns = z.infer<typeof viewRecordColumnsSchema>;
export type ViewRecord = z.infer<typeof viewRecordSchema>;
export type ViewRecords = z.infer<typeof viewRecordsSchema>;
