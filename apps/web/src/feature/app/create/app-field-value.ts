import { z } from "zod";

const simpleKindOptionsSchema = z.object({});

const selectBoxOptionsSchema = z.object({
  selector: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .array(),
});

const lookupOptionsSchema = z.object({
  appId: z.string(),
  selectFieldId: z.string(),
  saveFieldId: z.string(),
  label: z.string().optional(),
});

const simpleKindSchema = z.object({
  fieldName: z.string(),
  fieldKind: z.enum(["text", "multipleText"]),
  options: simpleKindOptionsSchema,
});

const selectBoxSchema = z.object({
  fieldName: z.string(),
  fieldKind: z.enum(["selectBox"]),
  options: selectBoxOptionsSchema,
});

const lookupSchema = z.object({
  fieldName: z.string(),
  fieldKind: z.enum(["lookup"]),
  options: lookupOptionsSchema,
});

const fieldAttributeSchema = z.union([
  simpleKindSchema,
  selectBoxSchema,
  lookupSchema,
]);

const appFieldValueSchema = z.record(
  z.union([
    z
      .object({
        mode: z.enum(["add"]),
      })
      .and(fieldAttributeSchema),
    z
      .object({
        mode: z.enum(["modify"]),
        id: z.string(),
      })
      .and(fieldAttributeSchema),
    z
      .object({
        mode: z.enum(["delete"]),
        id: z.string(),
      })
      .and(fieldAttributeSchema),
  ]),
);

export type AppFieldValue = NonNullable<z.infer<typeof appFieldValueSchema>>;
export type AppFieldOptions = AppFieldValue[number]["options"];
