import { z } from "zod";

import {
  fieldOptionsDateFormatSchema,
  fieldOptionsLookupSchema,
} from "./appSchema";

const simpleKindOptionsSchema = z.object({});

export const selectBoxOptionsSchema = z.object({
  selector: z
    .object({
      value: z.string().min(1),
      label: z.string().min(1),
    })
    .array()
    .min(1),
});

export const lookupOptionsSchema = z
  .object({
    label: z.string().optional(),
  })
  .and(fieldOptionsLookupSchema);

export const dateOptionsSchema = z.object({
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
    options: simpleKindOptionsSchema,
  }),
]);

export const addAppFieldValueSchema = z
  .object({
    mode: z.enum(["add"]),
  })
  .and(fieldAttributeSchema);

export const modifyAppFieldValueSchema = z
  .object({
    mode: z.enum(["modify"]),
    id: z.string(),
  })
  .and(fieldAttributeSchema);

const deleteAppFieldValueSchema = z
  .object({
    mode: z.enum(["delete"]),
    id: z.string(),
  })
  .and(fieldAttributeSchema);

const appFieldValueSchema = z.record(
  z.union([
    addAppFieldValueSchema,
    modifyAppFieldValueSchema,
    deleteAppFieldValueSchema,
  ]),
);

export type SelectBoxOptions = z.infer<typeof selectBoxOptionsSchema>;
export type AppFieldValue = NonNullable<z.infer<typeof appFieldValueSchema>>;
export type AppFieldOptions = AppFieldValue[number]["options"];
