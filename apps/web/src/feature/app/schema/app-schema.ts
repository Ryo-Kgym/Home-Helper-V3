import { z } from "zod";

export const fieldKindSchema = z.enum(["text", "selectBox", "multipleText"]);

export const fieldSchema = z.union([
  z.object({
    fieldName: z.string(),
    fieldKind: z.enum(["text", "multipleText"]),
    fieldIndex: z.number(),
    options: z.object({}),
  }),
  z.object({
    fieldName: z.string(),
    fieldKind: z.enum(["selectBox"]),
    fieldIndex: z.number(),
    options: z.object({
      selector: z.string(),
    }),
  }),
]);

export type Field = z.infer<typeof fieldSchema>;

export const fieldsSchema = z.record(fieldSchema); // fieldId

export type Fields = z.infer<typeof fieldsSchema>;

export const appSchema = z.object({
  id: z.string(),
  name: z.string(),
  fields: fieldsSchema,
});

export type App = z.infer<typeof appSchema>;
