import type { App } from "../schema/app-schema";
import { convertToApp } from "./convert-to-app";

type GetAppQuery = {
  __typename?: "query_root";
  app?: {
    __typename: "App";
    id: string;
    name?: string | null;
    fields?: string | null;
  } | null;
};

describe("convertToApp", () => {
  it("converts a GetAppQuery to an App", async () => {
    const data: GetAppQuery = {
      app: {
        __typename: "App",
        id: "1",
        name: "My App",
        fields: JSON.stringify({
          field1: { fieldName: "Field 1", fieldKind: "text" },
          field2: { fieldName: "Field 2", fieldKind: "selectBox" },
        }),
      },
    };

    const app = await convertToApp(data);

    const expected: App = {
      id: "1",
      name: "My App",
      fields: {
        field1: { fieldName: "Field 1", fieldKind: "text" },
        field2: { fieldName: "Field 2", fieldKind: "selectBox" },
      },
    };

    expect(app).toEqual(expected);
  });
});
