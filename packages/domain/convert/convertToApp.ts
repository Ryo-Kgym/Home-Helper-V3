import { App, appSchema } from "../schema/appSchema";
import { convertToFields } from "./convertToFields";

export const convertToApp = (data: {
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

  const fields = convertToFields(data.app.fields);

  return appSchema.parse({
    id: data.app.id,
    name: data.app?.name ?? "",
    fields,
  });
};
