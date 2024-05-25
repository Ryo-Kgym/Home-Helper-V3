import { View } from "@oneforall/domain/schema/view/viewSchema";
import { GetViewQuery } from "@v3/graphql/public/type";

import { convertToView } from "./convertToView";

describe("convertToView", () => {
  it("データを取得できた場合、期待した型に変換する", async () => {
    const data: GetViewQuery = {
      // @ts-expect-error @ts-expect-error
      view: {
        __typename: "View",
        id: "1",
        name: "My View",
        viewFields: [
          {
            __typename: "ViewField",
            id: "11111",
            index: 1,
            name: "Field 1",
            fieldKind: "text",
            options: {},
          },
          {
            __typename: "ViewField",
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
      },
    };

    const view = convertToView(data);

    const expected: View = {
      id: "1",
      name: "My View",
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

    expect(view).toEqual(expected);
  });

  it("view が取得できなかった場合、エラーを投げる。", async () => {
    const data: GetViewQuery = {};

    expect(() => convertToView(data)).toThrowError("View data is not found");
  });
});
