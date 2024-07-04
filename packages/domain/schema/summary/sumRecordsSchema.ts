import { z } from "zod";

import { fieldsSchema } from "../appSchema";
import { recordColumnsSchema } from "../recordSchema";

const summaryCriteriaSchema = z.object({
  groupingFields: fieldsSchema,
  summaryFields: fieldsSchema,
});

export type SummaryCriteria = z.infer<typeof summaryCriteriaSchema>;

const sumRecordsSchema = z.record(
  z.number(), // index
  z.object({
    columns: recordColumnsSchema,
    sum: z.number(),
    average: z.number(),
    count: z.number(),
  }),
);

export type SumRecords = z.infer<typeof sumRecordsSchema>;
