import { z } from "zod";

import { Record } from "../recordSchema";

const viewFieldIdSchema = z.string();

export const viewAppFieldSchema = z.object({
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

export type ViewAppRaw = {
  id: string;
  app: {
    id: string;
    name: string;
    records: Record[];
  };
  viewAppFields: z.infer<typeof viewAppFieldsSchema>;
};
