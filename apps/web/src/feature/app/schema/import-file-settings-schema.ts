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

export type Encoding = z.infer<typeof encodingSchema>;

const encodingTypeSchema = z.enum(["array"]);

export type EncodingType = z.infer<typeof encodingTypeSchema>;

export const importFileSettingsSchema = z
  .object({
    encodingTo: encodingSchema,
    encodingFrom: encodingSchema,
    encodingType: encodingTypeSchema,
    splitSeparator: z.string(),
    headerRows: z.number(),
    footerRows: z.number(),
    quotation: z.string().default(""),
    splitter: z.string().default(","),
  })
  .default({
    encodingTo: "UNICODE",
    encodingFrom: "UTF8",
    encodingType: "array",
    splitSeparator: "\n",
    headerRows: 0,
    footerRows: 0,
    quotation: '"',
    splitter: ",",
  });

export type ImportFileSettings = z.infer<typeof importFileSettingsSchema>;
