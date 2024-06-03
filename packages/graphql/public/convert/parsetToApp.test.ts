import { App } from "@oneforall/domain/schema/appSchema";

import { parseToApp } from "./parseToApp";

describe("convertToApp", () => {
  it("converts a GetAppQuery to an App", () => {
    const data = {
      app: {
        id: "1",
        name: "My App",
        fields: [
          {
            id: "11111",
            index: 1,
            name: "Field 1",
            fieldKind: "text",
            options: {},
          },
          {
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

    const app = parseToApp(data);

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

  it("app が取得できなかった場合、エラーを投げる。", () => {
    expect(() => parseToApp({})).toThrowError("App data is not found");
  });
});
