import { View } from "@oneforall/domain/schema/view/viewSchema";

import { parseToView } from "./parseToView";

describe("convertToView", () => {
  it("データを取得できた場合、期待した型に変換する", () => {
    const data = {
      id: "1",
      name: "My View",
      viewFields: [
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
    };

    const view = parseToView(data);

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

  it("データが取得できなかった場合、エラーを返す", () => {
    const data = undefined;
    expect(() => parseToView(data)).toThrowError("View not found");
  });
});
