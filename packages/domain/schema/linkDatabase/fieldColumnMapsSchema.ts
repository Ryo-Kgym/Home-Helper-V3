import { z } from "zod";

export const fieldColumnMapsSchema = z.record(
  z.string(), // fieldId
  z.object({
    columnName: z.string().min(1),
  }),
);

export type FieldColumnMaps = z.infer<typeof fieldColumnMapsSchema>;
