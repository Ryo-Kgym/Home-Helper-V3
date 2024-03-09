import type { App, Fields } from "@feature/app/schema/app-schema";
import type { GetAppQuery } from "@v3/graphql/public/type";
import { appSchema, fieldsSchema } from "@feature/app/schema";

export const convertToApp = (data: GetAppQuery): App => {
  const fieldsData = data?.app?.fields.reduce(
    (acc, f) =>
      ({
        ...acc,
        [f.id]: {
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
