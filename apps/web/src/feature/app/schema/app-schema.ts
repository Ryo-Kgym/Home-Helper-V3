import { z } from "zod";

export const fieldSchema = z.record(
  z.object({
    fieldName: z.string().nullable(),
    fieldKind: z.enum(["text", "selectBox", "multipleText"]),
  }),
);

export type Field = z.infer<typeof fieldSchema>;

export const appSchema = z.object({
  id: z.string(),
  name: z.string(),
  fields: fieldSchema,
});

export type App = z.infer<typeof appSchema>;
