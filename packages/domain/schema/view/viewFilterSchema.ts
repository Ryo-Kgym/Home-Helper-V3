import { z } from "zod";

import { fieldKindSchema } from "../appSchema";
import { filterComplexitySchema } from "../filterComplexitySchema";
import { filterOperatorSchema } from "../filterOperatorSchema";

export const viewFiltersSchema = z.record(
  z.string(), // filterIndex
  z.object({
    fieldId: z.string(),
    fieldKind: fieldKindSchema,
    operator: filterOperatorSchema,
    value: z.string(),
    filterComplexity: filterComplexitySchema,
  }),
);

export type ViewFilters = z.infer<typeof viewFiltersSchema>;
export type ViewFilter = ViewFilters[keyof ViewFilters];
