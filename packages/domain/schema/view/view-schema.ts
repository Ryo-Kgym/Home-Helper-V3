import { z } from "zod";

export const fieldKindSchema = z.enum([
  "text",
  "selectBox",
  "multipleText",
  "lookup",
  "date",
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
  viewId: z.string(),
  selectFieldId: z.string(),
  saveFieldId: z.string(),
});

export const fieldOptionsDateFormatSchema = z.enum([
  "YYYY-MM-DD", // YYYY-MM-DD
  "YYYY-MM-DD HH:mm:ss", // YYYY-MM-DD HH:mm:ss
  "YYYY_M_D_W__jpchar", // YYYY年M月D日W曜日
]);

export type FieldOptionsDateFormat = z.infer<
  typeof fieldOptionsDateFormatSchema
>;

export const fieldOptionsDateSchema = z.object({
  format: fieldOptionsDateFormatSchema,
});

export const fieldOptionsSchema = z.union([
  fieldOptionsTextSchema,
  fieldOptionsMultipleTextSchema,
  fieldOptionsSelectBoxSchema,
  fieldOptionsLookupSchema,
  fieldOptionsDateSchema,
]);

export type FieldOptionsSelectBox = z.infer<typeof fieldOptionsSelectBoxSchema>;
export type FieldOptionsLookup = z.infer<typeof fieldOptionsLookupSchema>;
export type FieldOptionsDate = z.infer<typeof fieldOptionsDateSchema>;

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
  z.object({
    id: z.string(),
    fieldName: z.string(),
    fieldKind: z.enum(["date"]),
    fieldIndex: z.number(),
    options: fieldOptionsDateSchema,
  }),
]);

export type Field = z.infer<typeof fieldSchema>;

export const fieldsSchema = z.record(fieldSchema); // fieldId

export type Fields = z.infer<typeof fieldsSchema>;

export const viewSchema = z.object({
  id: z.string(),
  name: z.string(),
  fields: fieldsSchema,
});

export type View = z.infer<typeof viewSchema>;
