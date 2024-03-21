import { z } from "zod";

export const importFileHistorySchema = z.object({
  importDate: z.date(),
  fileName: z.string(),
  importCount: z.number(),
});

export type ImportHistoryType = z.infer<typeof importFileHistorySchema>;
