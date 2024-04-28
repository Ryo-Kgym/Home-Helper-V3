import { z } from "zod";

const importFileFieldMappingSchema = z.object({
  fieldMappings: z.record(
    z.string(), // fieldId
    z.object({
      fieldName: z.string(),
      fileIndex: z.number().or(z.null()),
    }),
  ),
});

export type ImportFileFieldMapping = z.infer<
  typeof importFileFieldMappingSchema
>;
