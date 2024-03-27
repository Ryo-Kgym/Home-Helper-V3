import { z } from "zod";

export const fieldKindSchema = z.enum([
  "text",
  "selectBox",
  "multipleText",
  "lookup",
]);

export const fieldOptionsTextSchema = z.object({});
export const fieldOptionsMultipleTextSchema = z.object({});
export const fieldOptionsSelectBoxSchema = z.object({
  selector: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .array(),
});
export const fieldOptionsLookupSchema = z.object({
  appId: z.string(),
  selectFieldId: z.string(),
  saveFieldId: z.string(),
  label: z.string().optional(),
});
export const fieldOptionsSchema = z.union([
  fieldOptionsTextSchema,
  fieldOptionsMultipleTextSchema,
  fieldOptionsSelectBoxSchema,
  fieldOptionsLookupSchema,
]);

export type FieldOptionsSelectBox = z.infer<typeof fieldOptionsSelectBoxSchema>;
export type FieldOptionsLookup = z.infer<typeof fieldOptionsLookupSchema>;

export type FieldOptions = z.infer<typeof fieldOptionsSchema>;

export const fieldSchema = z.union([
  z.object({
    id: z.string(),
    fieldName: z.string(),
    fieldKind: z.enum(["text"]),
    fieldIndex: z.number(),
    options: fieldOptionsSchema,
  }),
  z.object({
    id: z.string(),
    fieldName: z.string(),
    fieldKind: z.enum(["multipleText"]),
    fieldIndex: z.number(),
    options: fieldOptionsMultipleTextSchema,
  }),
  z.object({
    id: z.string(),
    fieldName: z.string(),
    fieldKind: z.enum(["selectBox"]),
    fieldIndex: z.number(),
    options: fieldOptionsSelectBoxSchema,
  }),
  z.object({
    id: z.string(),
    fieldName: z.string(),
    fieldKind: z.enum(["lookup"]),
    fieldIndex: z.number(),
    options: fieldOptionsLookupSchema,
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
