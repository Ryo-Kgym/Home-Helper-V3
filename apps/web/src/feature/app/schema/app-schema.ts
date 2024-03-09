import { z } from "zod";

export const fieldKindSchema = z.enum(["text", "selectBox", "multipleText"]);

export const fieldSchema = z.object({
  fieldName: z.string(),
  fieldKind: fieldKindSchema,
  fieldIndex: z.number(),
});

export type Field = z.infer<typeof fieldSchema>;

export const fieldsSchema = z.record(fieldSchema); // fieldId

export type Fields = z.infer<typeof fieldsSchema>;

export const appSchema = z.object({
  id: z.string(),
  name: z.string(),
  fields: fieldsSchema,
});

export type App = z.infer<typeof appSchema>;
