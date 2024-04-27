import { z } from "zod";

export type InputViewApps = z.infer<typeof inputViewAppsSchema>;
export type InputViewApp = z.infer<typeof inputViewAppSchema>;

const inputViewAppFieldSchema = z.object({
  appFieldId: z.string(),
});
const viewFieldIdSchema = z.string();

export const inputViewAppFieldsSchema = z.record(
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
  appId: z.string(),
  viewFields: inputViewAppFieldsSchema,
});

const inputViewAppSchema = z.union([
  inputViewAppAddSchema,
  inputViewAppModifySchema,
]);

export const inputViewAppsSchema = z.record(
  z.number(),
  z.union([inputViewAppAddSchema, inputViewAppModifySchema]),
);
