import { z } from "zod";

import {
  fieldOptionsDateSchema,
  fieldOptionsLookupSchema,
  fieldOptionsMultipleTextSchema,
  fieldOptionsSchema,
  fieldOptionsSelectBoxSchema,
} from "../appSchema";

export const viewFieldSchema = z.union([
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

export type ViewField = z.infer<typeof viewFieldSchema>;

export const viewFieldsSchema = z.record(
  z.string(), // fieldId
  viewFieldSchema,
);

export type ViewFields = z.infer<typeof viewFieldsSchema>;

export const viewSchema = z.object({
  id: z.string(),
  name: z.string(),
  fields: viewFieldsSchema,
});

export type View = z.infer<typeof viewSchema>;
