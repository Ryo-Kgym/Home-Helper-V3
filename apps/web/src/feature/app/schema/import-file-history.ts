import { previewRecordsSchema } from "@feature/app/schema/preview-records-schema";
import { z } from "zod";

export const importFileHistorySchema = z.object({
  id: z.string(),
  importDate: z.date(),
  fileName: z.string(),
  importCount: z.number(),
  importFileRecords: previewRecordsSchema,
});

export type ImportFileHistory = z.infer<typeof importFileHistorySchema>;
