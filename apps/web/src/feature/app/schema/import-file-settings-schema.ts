import { z } from "zod";

// Example of a valid JSON object
// {
//   "encodingTo": "UNICODE",
//   "encodingFrom": "SJIS",
//   "encodingType": "array",
//   "splitSeparator": "\r\n",
//   "headerRows": 0,
//   "footerRows": 1
// }

const encodingSchema = z.enum([
  "ASCII",
  "BINARY",
  "JIS",
  "UTF16",
  "UTF16BE",
  "UTF16LE",
  "UTF32",
  "UTF8",
  "EUCJP",
  "SJIS",
  "UNICODE",
  "AUTO",
]);

const encodingTypeSchema = z.enum(["array"]);

export const importFileSettingsSchema = z.object({
  encodingTo: encodingSchema,
  encodingFrom: encodingSchema,
  encodingType: encodingTypeSchema,
  splitSeparator: z.string(),
  headerRows: z.number().default(0),
  footerRows: z.number().default(0),
  quotation: z.string().default(""),
  splitter: z.string().default(","),
});

export type ImportFileSettings = z.infer<typeof importFileSettingsSchema>;
