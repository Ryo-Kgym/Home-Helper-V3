import { z } from "zod";

const noTypeOptionsSchema = z.object({});

export type NoTypeOptions = z.infer<typeof noTypeOptionsSchema>;

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
  noTypeOptionsSchema,
  selectBoxOptionsSchema,
  lookupOptionsSchema,
]);

export type AppFieldValueOptions = z.infer<typeof appFieldValueOptionsSchema>;

const noTypeSchema = z.object({
  fieldKind: z.enum(["text", "multipleText"]),
  options: noTypeOptionsSchema,
});

const selectBoxSchema = z.object({
  fieldKind: z.enum(["selectBox"]),
  options: selectBoxOptionsSchema,
});

const lookupSchema = z.object({
  fieldKind: z.enum(["lookup"]),
  options: lookupOptionsSchema,
});

const optionsSchema = z.union([noTypeSchema, selectBoxSchema, lookupSchema]);

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
