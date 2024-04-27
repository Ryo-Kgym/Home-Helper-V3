import { z } from "zod";

import { fieldKindSchema } from "../app-schema";

export const viewRecordColumnSchema = z.object({
  fieldKind: fieldKindSchema,
  value: z.string(),
  options: z
    .object({
      label: z.string(),
    })
    .optional(),
});

const viewColumnsSchema = z.record(
  z.string(), // fieldId
  viewRecordColumnSchema,
);

export const viewRecordsSchema = z.record(
  z.string(), // appId + "-" + recordId
  z.object({
    appId: z.string(),
    appName: z.string(),
    recordId: z.string(),
    columns: viewColumnsSchema,
  }),
);

export type ViewRecords = z.infer<typeof viewRecordsSchema>;
