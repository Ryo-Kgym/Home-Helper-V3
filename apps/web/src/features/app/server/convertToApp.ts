import { convertToFields } from "@features/app/server/convertToFields";
import { App, appSchema } from "@oneforall/domain/schema/appSchema";
import { GetAppQuery } from "@v3/graphql/public/type";

export const convertToApp = (data: GetAppQuery): App => {
  if (!data?.app) {
    throw new Error("App data is not found");
  }

  const fields = convertToFields(data.app.fields);

  return appSchema.parse({
    id: data.app.id,
    name: data?.app?.name ?? "",
    fields,
  });
};
