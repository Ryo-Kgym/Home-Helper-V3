import { z } from "zod";

import { fieldColumnMapsSchema } from "./fieldColumnMapsSchema";

const databaseSchema = z.literal("neon");

const linkDatabaseConnectionNeonSchema = z.object({
  endpoint: z.string().min(1),
});

export const linkDatabaseSchema = z.object({
  database: databaseSchema,
  connection: linkDatabaseConnectionNeonSchema,
  sql: z.string().min(1),
  parameters: z.record(z.string()),
  fieldColumnMaps: fieldColumnMapsSchema,
});

export type Database = z.infer<typeof databaseSchema>;
export type LinkDatabase = z.infer<typeof linkDatabaseSchema>;
