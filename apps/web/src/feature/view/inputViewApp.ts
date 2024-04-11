import { z } from "zod";

export type InputViewApp = z.infer<typeof inputViewAppSchema>;
export type InputViewAppFields = z.infer<typeof inputViewAppFieldsSchema>;

const inputViewAppFieldSchema = z.object({
  viewFieldId: z.string(),
  appFieldId: z.string(),
});

const inputViewAppFieldsSchema = inputViewAppFieldSchema.array();

const inputViewAppAddSchema = z.object({
  mode: z.enum(["add"]),
  appId: z.string(),
  fields: inputViewAppFieldsSchema,
});

const inputViewAppModifySchema = z.object({
  mode: z.enum(["modify"]),
  id: z.string(),
  fields: inputViewAppFieldsSchema,
});

const inputViewAppSchema = z.object({
  apps: z.array(z.union([inputViewAppAddSchema, inputViewAppModifySchema])),
});
