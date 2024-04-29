import { z } from "zod";

const importFileFieldMappingSchema = z.record(
  z.string(), // fieldId
  z.object({
    fieldName: z.string(),
    fileColumnIndex: z.number().or(z.null()),
  }),
);

export type ImportFileFieldMapping = z.infer<
  typeof importFileFieldMappingSchema
>;
