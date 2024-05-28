import { App, appSchema } from "@oneforall/domain/schema/appSchema";

import { parseToFields } from "./parseToFields";

export const parseToApp = (data: {
  app?: {
    id: string;
    name: string;
    fields: {
      id: string;
      name: string;
      index: number;
      fieldKind: string;
      options?: unknown;
    }[];
  } | null;
}): App => {
  if (!data?.app) {
    throw new Error("App data is not found");
  }

  const fields = parseToFields(data.app.fields);

  return appSchema.parse({
    id: data.app.id,
    name: data.app?.name ?? "",
    fields,
  });
};
