import { z } from "zod";

import { previewRecordsSchema } from "./preview-records-schema";

const importFileHistorySchema = z.object({
  id: z.string(),
  importDate: z.date(),
  fileName: z.string(),
  importCount: z.number(),
  importFileRecords: previewRecordsSchema,
});

export type ImportFileHistory = z.infer<typeof importFileHistorySchema>;
