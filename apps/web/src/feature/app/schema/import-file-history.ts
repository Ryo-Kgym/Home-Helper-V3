import { recordsSchema } from "@feature/app/schema/record-schema";
import { z } from "zod";

export const importFileHistorySchema = z.object({
  id: z.string(),
  importDate: z.date(),
  fileName: z.string(),
  importCount: z.number(),
  importFileRecords: recordsSchema,
});

export type ImportFileHistory = z.infer<typeof importFileHistorySchema>;
