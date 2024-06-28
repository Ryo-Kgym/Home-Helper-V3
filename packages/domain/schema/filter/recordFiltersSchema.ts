import { z } from "zod";

import { fieldKindSchema } from "../appSchema";
import { filterComplexitySchema } from "./filterComplexitySchema";
import { filterOperatorSchema } from "./filterOperatorSchema";

export const recordFiltersSchema = z.record(
  z.string(), // filterIndex
  z.object({
    fieldId: z.string(),
    fieldKind: fieldKindSchema,
    operator: filterOperatorSchema,
    value: z.string(),
    filterComplexity: filterComplexitySchema,
  }),
);

export type RecordFilters = z.infer<typeof recordFiltersSchema>;
export type RecordFilter = RecordFilters[keyof RecordFilters];
