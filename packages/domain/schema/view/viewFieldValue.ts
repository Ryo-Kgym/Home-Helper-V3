import { z } from "zod";

import { numericOptionsSchema } from "../appFieldValue";
import {
  fieldOptionsDateFormatSchema,
  fieldOptionsLookupSchema,
} from "../appSchema";

const simpleKindOptionsSchema = z.object({});

const selectBoxOptionsSchema = z.object({
  selector: z
    .object({
      value: z.string().min(1),
      label: z.string().min(1),
    })
    .array()
    .min(1),
});

const lookupOptionsSchema = z
  .object({
    label: z.string().optional(),
  })
  .and(fieldOptionsLookupSchema);

const dateOptionsSchema = z.object({
  format: fieldOptionsDateFormatSchema,
});

const fieldAttributeSchema = z.union([
  z.object({
    fieldName: z.string().min(1),
    fieldKind: z.literal("text"),
    options: simpleKindOptionsSchema,
  }),
  z.object({
    fieldName: z.string().min(1),
    fieldKind: z.literal("multipleText"),
    options: simpleKindOptionsSchema,
  }),
  z.object({
    fieldName: z.string().min(1),
    fieldKind: z.literal("selectBox"),
    options: selectBoxOptionsSchema,
  }),
  z.object({
    fieldName: z.string().min(1),
    fieldKind: z.literal("lookup"),
    options: lookupOptionsSchema,
  }),
  z.object({
    fieldName: z.string().min(1),
    fieldKind: z.literal("date"),
    options: dateOptionsSchema,
  }),
  z.object({
    fieldName: z.string().min(1),
    fieldKind: z.literal("numeric"),
    options: numericOptionsSchema,
  }),
]);

export const addViewFieldValueSchema = z
  .object({
    mode: z.enum(["add"]),
  })
  .and(fieldAttributeSchema);

const modifyViewFieldValueSchema = z
  .object({
    mode: z.enum(["modify"]),
    id: z.string(),
  })
  .and(fieldAttributeSchema);

const deleteViewFieldValueSchema = z
  .object({
    mode: z.enum(["delete"]),
    id: z.string(),
  })
  .and(fieldAttributeSchema);

const appFieldValueSchema = z.record(
  z.union([
    addViewFieldValueSchema,
    modifyViewFieldValueSchema,
    deleteViewFieldValueSchema,
  ]),
);

export type ViewFieldValue = NonNullable<z.infer<typeof appFieldValueSchema>>;
export type ViewFieldOptions = ViewFieldValue[number]["options"];
