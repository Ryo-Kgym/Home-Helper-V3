import { z } from "zod";

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

export type SelectBoxOptions = z.infer<typeof selectBoxOptionsSchema>;

const lookupOptionsSchema = z.object({
  appId: z.string(),
  selectFieldId: z.string(),
  saveFieldId: z.string(),
  label: z.string().optional(),
});

const simpleKindSchema = z.object({
  fieldName: z.string().min(1),
  fieldKind: z.enum(["text", "multipleText"]),
  options: simpleKindOptionsSchema,
});

const selectBoxSchema = z.object({
  fieldName: z.string().min(1),
  fieldKind: z.enum(["selectBox"]),
  options: selectBoxOptionsSchema,
});

const lookupSchema = z.object({
  fieldName: z.string().min(1),
  fieldKind: z.enum(["lookup"]),
  options: lookupOptionsSchema,
});

const fieldAttributeSchema = z.union([
  simpleKindSchema,
  selectBoxSchema,
  lookupSchema,
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

export const deleteAppFieldValueSchema = z
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

export type AppFieldValue = NonNullable<z.infer<typeof appFieldValueSchema>>;
export type AppFieldOptions = AppFieldValue[number]["options"];
