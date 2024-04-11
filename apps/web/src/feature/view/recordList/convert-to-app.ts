import {
  Fields,
  fieldsSchema,
  View,
  viewSchema,
} from "@oneforall/domain/schema/view/view-schema";
import { GetViewQuery } from "@v3/graphql/public/type";

export const convertToView = (data: GetViewQuery): View => {
  if (!data?.view) {
    throw new Error("View data is not found");
  }

  const fieldsData = data.view.viewFields.reduce(
    (acc, f) =>
      ({
        ...acc,
        [f.id]: {
          id: f.id,
          fieldName: f.name,
          fieldKind: f.fieldKind,
          fieldIndex: f.index,
          options: f.options,
        },
      }) as Fields,
    {},
  );

  const fields = fieldsSchema.parse(fieldsData);

  return viewSchema.parse({
    id: data.view.id,
    name: data?.view?.name ?? "",
    fields,
  });
};
