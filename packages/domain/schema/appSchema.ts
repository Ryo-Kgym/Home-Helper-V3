import { z } from "zod";

import { filterComplexitySchema } from "./filterComplexitySchema";
import { sortDirectionSchema } from "./sortDirectionSchema";

export const fieldKindSchema = z.enum([
  "text",
  "selectBox",
  "multipleText",
  "lookup",
  "date",
  "numeric",
]);

export const fieldOptionsTextSchema = z.object({});
export const fieldOptionsMultipleTextSchema = z.object({});
export const fieldOptionsNumericSchema = z.object({});
export const fieldOptionsSelectBoxSchema = z.object({
  selector: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .array(),
});

const fieldOptionsLookupFilterSchema = z
  .object({
    fieldId: z.string(),
    complexity: filterComplexitySchema,
  })
  .and(
    z.union([
      z.object({
        filterType: z.literal("value"),
        value: z.string().default(""),
      }),
      z.object({
        filterType: z.literal("field"),
        value: z.string().default(""),
      }),
    ]),
  );

export const fieldOptionsLookupSchema = z.object({
  appId: z.string(),
  selectFieldId: z.string(),
  saveFieldId: z.string(),
  sortFieldId: z.string().default(""),
  sortDirection: sortDirectionSchema.default("asc"),
  filters: z
    .record(
      z.string(), // index
      fieldOptionsLookupFilterSchema,
    )
    .default({}),
});

export const fieldOptionsDateFormatSchema = z.enum([
  "YYYY-MM-DD", // YYYY-MM-DD
  "YYYY-MM-DD HH:mm:ss", // YYYY-MM-DD HH:mm:ss
  "YYYY_M_D_W__jpchar", // YYYY年M月D日W曜日
]);

export const fieldOptionsDateSchema = z.object({
  format: fieldOptionsDateFormatSchema,
});

export const fieldSchema = z.union([
  z.object({
    id: z.string(),
    fieldName: z.string(),
    fieldKind: z.literal("text"),
    fieldIndex: z.number(),
    options: fieldOptionsTextSchema,
  }),
  z.object({
    id: z.string(),
    fieldName: z.string(),
    fieldKind: z.literal("multipleText"),
    fieldIndex: z.number(),
    options: fieldOptionsMultipleTextSchema,
  }),
  z.object({
    id: z.string(),
    fieldName: z.string(),
    fieldKind: z.literal("numeric"),
    fieldIndex: z.number(),
    options: fieldOptionsNumericSchema,
  }),
  z.object({
    id: z.string(),
    fieldName: z.string(),
    fieldKind: z.literal("selectBox"),
    fieldIndex: z.number(),
    options: fieldOptionsSelectBoxSchema,
  }),
  z.object({
    id: z.string(),
    fieldName: z.string(),
    fieldKind: z.literal("lookup"),
    fieldIndex: z.number(),
    options: fieldOptionsLookupSchema,
  }),
  z.object({
    id: z.string(),
    fieldName: z.string(),
    fieldKind: z.literal("date"),
    fieldIndex: z.number(),
    options: fieldOptionsDateSchema,
  }),
]);

export const fieldsSchema = z.record(
  z.string(), // fieldId
  fieldSchema,
);

export const appSchema = z.object({
  id: z.string(),
  name: z.string(),
  fields: fieldsSchema,
});

export type App = z.infer<typeof appSchema>;

export type Fields = z.infer<typeof fieldsSchema>;

export type Field = z.infer<typeof fieldSchema>;
export type FieldOptionsSelectBox = z.infer<typeof fieldOptionsSelectBoxSchema>;
export type FieldOptionsLookup = z.infer<typeof fieldOptionsLookupSchema>;
export type FieldOptionsLookupFilter = z.infer<
  typeof fieldOptionsLookupFilterSchema
>;
export type FieldOptionsDate = z.infer<typeof fieldOptionsDateSchema>;
export type FieldOptionsDateFormat = z.infer<
  typeof fieldOptionsDateFormatSchema
>;
