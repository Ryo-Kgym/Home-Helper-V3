import { z } from "zod";

export type InputViewApp = z.infer<typeof inputViewAppSchema>;
export type InputViewAppFields = z.infer<typeof inputViewAppFieldsSchema>;

const inputViewAppFieldSchema = z.object({
  appFieldId: z.string(),
});

const viewFieldIdSchema = z.string();
const inputViewAppFieldsSchema = z.record(
  viewFieldIdSchema,
  inputViewAppFieldSchema,
);

const inputViewAppAddSchema = z.object({
  mode: z.enum(["add"]),
  appId: z.string(),
  viewFields: inputViewAppFieldsSchema,
});

const inputViewAppModifySchema = z.object({
  mode: z.enum(["modify"]),
  id: z.string(),
  viewFields: inputViewAppFieldsSchema,
});

const inputViewAppSchema = z.object({
  apps: z.array(z.union([inputViewAppAddSchema, inputViewAppModifySchema])),
});
