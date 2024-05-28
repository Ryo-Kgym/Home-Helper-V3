import z from "zod";

export const filterComplexitySchema = z.enum(["and", "or"]).default("and");

export type FilterComplexity = z.infer<typeof filterComplexitySchema>;
