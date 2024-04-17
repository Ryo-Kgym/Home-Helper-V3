import { z } from "zod";

const viewAppIdSchema = z.string();

const viewAppFieldSchema = z.object({
  appFieldId: z.string(),
});

const viewAppFieldsSchema = z.record(viewAppIdSchema, viewAppFieldSchema);

const viewAppsSchema = z.record(
  z.number(),
  z.object({
    appId: z.string(),
    viewFields: viewAppFieldsSchema,
  }),
);

export type ViewApps = z.infer<typeof viewAppsSchema>;
export type ViewApp = ViewApps[keyof ViewApps];
