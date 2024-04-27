import { convertToAppListData } from "@feature/view/modify/function/convertToAppListData";
import { AppListData } from "@feature/view/modify/type/appListData";
import { GetAppFieldListQuery } from "@v3/graphql/public/type";

describe("convertToAppListData", () => {
  it("引数に対して、期待した値が返されること", () => {
    const data: GetAppFieldListQuery = {
      group: {
        id: "group1",
        apps: [
          {
            id: "app1",
            name: "アプリ1",
            fields: [
              {
                id: "appField11",
                name: "フィールド1",
                fieldKind: "text",
              },
              {
                id: "appField12",
                name: "フィールド2",
                fieldKind: "multipleText",
              },
            ],
          },
          {
            id: "modify2",
            name: "アプリ2",
            fields: [
              {
                id: "appField21",
                name: "フィールド1",
                fieldKind: "date",
              },
              {
                id: "appField22",
                name: "フィールド2",
                fieldKind: "lookup",
              },
            ],
          },
        ],
      },
    };

    const result = convertToAppListData(data);

    expect(result).toEqual<AppListData>([
      {
        label: "アプリ1",
        value: "app1",
        fields: [
          {
            value: "appField11",
            label: "フィールド1",
            fieldKind: "text",
          },
          {
            value: "appField12",
            label: "フィールド2",
            fieldKind: "multipleText",
          },
        ],
      },
      {
        label: "アプリ2",
        value: "modify2",
        fields: [
          {
            value: "appField21",
            label: "フィールド1",
            fieldKind: "date",
          },
          {
            value: "appField22",
            label: "フィールド2",
            fieldKind: "lookup",
          },
        ],
      },
    ]);
  });
});
