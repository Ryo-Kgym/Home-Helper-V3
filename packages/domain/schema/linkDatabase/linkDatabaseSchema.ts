import { z } from "zod";

import { fieldColumnMapsSchema } from "./fieldColumnMapsSchema";

const linkDatabaseConnectionNeonSchema = z.object({
  endpoint: z.string().min(1),
});

export const linkDatabaseSchema = z.object({
  database: z.literal("neon"),
  connection: linkDatabaseConnectionNeonSchema,
  sql: z.string().min(1),
  parameters: z.record(z.string()),
  fieldColumnMaps: fieldColumnMapsSchema,
});

export type LinkDatabase = z.infer<typeof linkDatabaseSchema>;
