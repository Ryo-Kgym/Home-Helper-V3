import z from "zod";

export const filterOperatorSchema = z.enum([
  "eq",
  "neq",
  "lt",
  "lte",
  "gt",
  "gte",
  "in",
  "nin",
  "like",
  "nlike",
]);

export type FilterOperator = z.infer<typeof filterOperatorSchema>;
