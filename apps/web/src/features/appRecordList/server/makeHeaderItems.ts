import { Fields } from "@oneforall/domain/schema/appSchema";

export const makeHeaderItems = (fields: Fields) => [
  { name: "No." },
  ...Object.values(fields).map((field) => ({
    name: field.fieldName,
  })),
  { name: "" },
];
