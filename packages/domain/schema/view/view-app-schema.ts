import { z } from "zod";

const viewFieldIdSchema = z.string();

const viewAppFieldSchema = z.object({
  appFieldId: z.string(),
});

const viewAppFieldsSchema = z.record(viewFieldIdSchema, viewAppFieldSchema);

const viewAppsSchema = z.record(
  z.number(),
  z.object({
    appId: z.string(),
    viewFields: viewAppFieldsSchema,
  }),
);

export type ViewApps = z.infer<typeof viewAppsSchema>;
export type ViewApp = ViewApps[keyof ViewApps];
