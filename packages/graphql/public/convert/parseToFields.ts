import { Fields, fieldsSchema } from "@oneforall/domain/schema/appSchema";

export const parseToFields = (
  data: {
    id: string;
    name: string;
    index: number;
    fieldKind: string;
    options?: unknown;
  }[],
): Fields => {
  const fieldsData = Object.fromEntries(
    data.map((f) => [
      f.id,
      {
        id: f.id,
        fieldName: f.name,
        fieldKind: f.fieldKind,
        fieldIndex: f.index,
        options: f.options,
      },
    ]),
  );

  return fieldsSchema.parse(fieldsData);
};
