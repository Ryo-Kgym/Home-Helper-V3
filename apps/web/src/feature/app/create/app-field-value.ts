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
  fieldKind: z.enum(["text", "multipleText"]),
  options: simpleKindOptionsSchema,
});

const selectBoxSchema = z.object({
  fieldKind: z.enum(["selectBox"]),
  options: selectBoxOptionsSchema,
});

const lookupSchema = z.object({
  fieldKind: z.enum(["lookup"]),
  options: lookupOptionsSchema,
});

const optionSchema = z.union([simpleKindSchema, selectBoxSchema, lookupSchema]);

const appFieldValueSchema = z.record(
  z.union([
    z
      .object({
        mode: z.enum(["add"]),
        fieldName: z.string(),
      })
      .and(optionSchema),
    z
      .object({
        mode: z.enum(["modify"]),
        id: z.string(),
        fieldName: z.string(),
      })
      .and(optionSchema),
    z
      .object({
        mode: z.enum(["delete"]),
        id: z.string(),
        fieldName: z.string(),
      })
      .and(optionSchema),
  ]),
);

export type AppFieldValue = NonNullable<z.infer<typeof appFieldValueSchema>>;
