import type { App } from "@feature/app/schema/app-schema";
import type { GetAppQuery } from "@v3/graphql/public/type";
import { appSchema, fieldSchema } from "@feature/app/schema";

export const convertToApp = async (data: GetAppQuery): Promise<App> => {
  const fields = fieldSchema.parse(JSON.parse(data?.app?.fields ?? "{}"));
  return appSchema.parse({
    id: data?.app?.id,
    name: data?.app?.name ?? "",
    fields,
  });
};
