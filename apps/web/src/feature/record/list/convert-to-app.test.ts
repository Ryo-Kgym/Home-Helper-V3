import { convertToApp } from "./convert-to-app";

import type { GetAppQuery } from "../../../../../../packages/graphql/public/type";
import type { App } from "@feature/app/schema";


describe("convertToApp", () => {
  it("converts a GetAppQuery to an App", async () => {
    const data: GetAppQuery = {
      app: {
        __typename: "App",
        id: "1",
        name: "My App",
        fields: [
          {
            __typename: "Field",
            id: "11111",
            index: 1,
            name: "Field 1",
            fieldKind: "text",
            options: {},
          },
          {
            __typename: "Field",
            id: "22222",
            index: 2,
            name: "Field 2",
            fieldKind: "selectBox",
            options: {
              selector: [
                {
                  label: "a",
                  value: "a",
                },
                {
                  label: "b",
                  value: "b",
                },
              ],
            },
          },
        ],
        records: [],
      },
    };

    const app = convertToApp(data);

    const expected: App = {
      id: "1",
      name: "My App",
      fields: {
        "11111": {
          id: "11111",
          fieldName: "Field 1",
          fieldKind: "text",
          fieldIndex: 1,
          options: {},
        },
        "22222": {
          id: "22222",
          fieldName: "Field 2",
          fieldKind: "selectBox",
          fieldIndex: 2,
          options: {
            selector: [
              {
                label: "a",
                value: "a",
              },
              {
                label: "b",
                value: "b",
              },
            ],
          },
        },
      },
    };

    expect(app).toEqual(expected);
  });
});
