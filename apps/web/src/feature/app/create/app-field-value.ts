import { z } from "zod";

const noTypeSchema = z.object({
  fieldKind: z.enum(["text", "multipleText"]),
  options: z.object({}),
});

const selectBoxSchema = z.object({
  fieldKind: z.enum(["selectBox"]),
  options: z.object({
    selector: z.string(),
  }),
});

const lookupSchema = z.object({
  fieldKind: z.enum(["lookup"]),
  options: z.object({
    appId: z.string(),
    selectFieldId: z.string(),
    saveFieldId: z.string(),
    label: z.string().optional(),
  }),
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
