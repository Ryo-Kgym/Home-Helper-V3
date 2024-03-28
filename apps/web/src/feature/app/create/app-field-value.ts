import { z } from "zod";

const simpleKindOptionsSchema = z.object({});

export type SimpleKindOptions = z.infer<typeof simpleKindOptionsSchema>;

const selectBoxOptionsSchema = z.object({
  selector: z.string(),
});

export type SelectBoxOptions = z.infer<typeof selectBoxOptionsSchema>;

const lookupOptionsSchema = z.object({
  appId: z.string(),
  selectFieldId: z.string(),
  saveFieldId: z.string(),
  label: z.string().optional(),
});

export type LookupOptions = z.infer<typeof lookupOptionsSchema>;

const appFieldValueOptionsSchema = z.union([
  simpleKindOptionsSchema,
  selectBoxOptionsSchema,
  lookupOptionsSchema,
]);

export type AppFieldValueOptions = z.infer<typeof appFieldValueOptionsSchema>;

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

const optionsSchema = z.union([
  simpleKindSchema,
  selectBoxSchema,
  lookupSchema,
]);

const appFieldValueSchema = z.record(
  z.union([
    z
      .object({
        mode: z.enum(["add"]),
        fieldName: z.string(),
      })
      .and(optionsSchema),
    z
      .object({
        mode: z.enum(["modify"]),
        id: z.string(),
        fieldName: z.string(),
      })
      .and(optionsSchema),
    z
      .object({
        mode: z.enum(["delete"]),
        id: z.string(),
        fieldName: z.string(),
      })
      .and(optionsSchema),
  ]),
);

export type AppFieldValue = NonNullable<z.infer<typeof appFieldValueSchema>>;
