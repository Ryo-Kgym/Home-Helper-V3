import { appSchema, fieldsSchema } from "@oneforall/domain/schema";
import { App, Fields } from "@oneforall/domain/schema/app-schema";
import { GetAppQuery } from "@v3/graphql/public/type";

export const convertToApp = (data: GetAppQuery): App => {
  const fieldsData = data?.app?.fields.reduce(
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

  return appSchema.parse({
    id: data?.app?.id,
    name: data?.app?.name ?? "",
    fields,
  });
};
