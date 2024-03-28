import { z } from "zod";

const simpleKindOptionsSchema = z.object({});

export type SimpleKindOptions = z.infer<typeof simpleKindOptionsSchema>;

const addSelectBoxOptionsSchema = z.object({
  selector: z.string(),
});

const modifySelectBoxOptionsSchema = z.object({
  selector: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .array(),
});

export type SelectBoxOptions = z.infer<typeof addSelectBoxOptionsSchema>;
export type ModifySelectBoxOptions = z.infer<
  typeof modifySelectBoxOptionsSchema
>;

const lookupOptionsSchema = z.object({
  appId: z.string(),
  selectFieldId: z.string(),
  saveFieldId: z.string(),
  label: z.string().optional(),
});

export type LookupOptions = z.infer<typeof lookupOptionsSchema>;

const addAppFieldValueOptionsSchema = z.union([
  simpleKindOptionsSchema,
  addSelectBoxOptionsSchema,
  lookupOptionsSchema,
]);

const modifyAppFieldValueOptionsSchema = z.union([
  simpleKindOptionsSchema,
  modifySelectBoxOptionsSchema,
  lookupOptionsSchema,
]);

export type AddAppFieldValueOptions = z.infer<
  typeof addAppFieldValueOptionsSchema
>;
export type ModifyAppFieldValueOptions = z.infer<
  typeof modifyAppFieldValueOptionsSchema
>;

export type AppFieldValueOptions =
  | AddAppFieldValueOptions
  | ModifyAppFieldValueOptions;

const simpleKindSchema = z.object({
  fieldKind: z.enum(["text", "multipleText"]),
  options: simpleKindOptionsSchema,
});

const addSelectBoxSchema = z.object({
  fieldKind: z.enum(["selectBox"]),
  options: addSelectBoxOptionsSchema,
});

const modifySelectBoxSchema = z.object({
  fieldKind: z.enum(["selectBox"]),
  options: modifySelectBoxOptionsSchema,
});

const lookupSchema = z.object({
  fieldKind: z.enum(["lookup"]),
  options: lookupOptionsSchema,
});

const addOptionsSchema = z.union([
  simpleKindSchema,
  addSelectBoxSchema,
  lookupSchema,
]);

const modifyOptionSchema = z.union([
  simpleKindSchema,
  modifySelectBoxSchema,
  lookupSchema,
]);

const appFieldValueSchema = z.record(
  z.union([
    z
      .object({
        mode: z.enum(["add"]),
        fieldName: z.string(),
      })
      .and(addOptionsSchema),
    z
      .object({
        mode: z.enum(["modify"]),
        id: z.string(),
        fieldName: z.string(),
      })
      .and(modifyOptionSchema),
    z
      .object({
        mode: z.enum(["delete"]),
        id: z.string(),
        fieldName: z.string(),
      })
      .and(modifyOptionSchema),
  ]),
);

export type AppFieldValue = NonNullable<z.infer<typeof appFieldValueSchema>>;
