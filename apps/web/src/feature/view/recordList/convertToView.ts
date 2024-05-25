import {
  View,
  viewFieldsSchema,
  viewSchema,
} from "@oneforall/domain/schema/view/viewSchema";
import { GetViewQuery } from "@v3/graphql/public/type";

export const convertToView = (data: GetViewQuery): View => {
  if (!data?.view) {
    throw new Error("View data is not found");
  }

  const fieldsData = Object.fromEntries(
    data.view.viewFields.map((f) => [
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

  const fields = viewFieldsSchema.parse(fieldsData);

  return viewSchema.parse({
    id: data.view.id,
    name: data?.view?.name ?? "",
    fields,
  });
};
