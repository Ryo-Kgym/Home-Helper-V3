import { z } from "zod";

const viewAppFieldSchema = z.object({
  appFieldId: z.string(),
});

const viewAppFieldsSchema = z.record(viewAppFieldSchema); // view_field.id

const viewAppsSchema = z.record(z.string(), viewAppFieldsSchema); // app.id

export type ViewApps = z.infer<typeof viewAppsSchema>;
