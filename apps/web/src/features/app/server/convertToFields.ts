import { Fields, fieldsSchema } from "@oneforall/domain/schema/appSchema";
import { GetAppQuery } from "@v3/graphql/public/type";

export const convertToFields = (
  data: NonNullable<NonNullable<GetAppQuery>["app"]>["fields"],
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
