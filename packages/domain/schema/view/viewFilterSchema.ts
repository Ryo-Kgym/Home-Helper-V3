import { z } from "zod";

import { fieldKindSchema } from "../appSchema";
import { filterComplexitySchema } from "../filterComplexitySchema";

export const viewFiltersSchema = z.record(
  z.string(), // filterIndex
  z.object({
    fieldId: z.string(),
    fieldKind: fieldKindSchema,
    operator: z.enum(["eq"]),
    value: z.string(),
    filterComplexity: filterComplexitySchema,
  }),
);

export type ViewFilters = z.infer<typeof viewFiltersSchema>;
