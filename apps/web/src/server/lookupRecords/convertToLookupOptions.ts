import { App } from "@oneforall/domain/schema/appSchema";

/**
 * @package
 */
export const convertToLookupOptions = (app: App) =>
  Object.fromEntries(
    Object.entries(app.fields)
      .filter(([, { fieldKind }]) => fieldKind === "lookup")
      .map(([fieldId, { fieldKind, options }]) => {
        if (fieldKind !== "lookup") {
          throw new Error("Invalid field kind");
        }

        return [fieldId, options];
      }),
  );
