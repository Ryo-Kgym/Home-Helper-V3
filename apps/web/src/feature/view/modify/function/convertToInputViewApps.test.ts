import { convertToInputViewApps } from "@feature/view/modify/function/convertToInputViewApps";
import { GetViewQuery } from "@v3/graphql/public/type";

describe("convertToInputViewApps", () => {
  it("データを取得できた場合、期待した型に変換される", async () => {
    const data: GetViewQuery = {
      // @ts-expect-error @ts-expect-error
      view: {
        viewApps: [
          {
            __typename: "ViewApp",
            id: "1",
            appId: "app1",
            fields: {
              "11111": {
                appFieldId: "aaaaa",
              },
              "22222": {
                appFieldId: "bbbbb",
              },
            },
          },
          {
            __typename: "ViewApp",
            id: "2",
            appId: "app2",
            fields: {
              "11111": {
                appFieldId: "ccccc",
              },
              "22222": {
                appFieldId: "ddddd",
              },
            },
          },
        ],
      },
    };

    const result = convertToInputViewApps(data);

    expect(result).toEqual({
      0: {
        mode: "modify",
        id: "1",
        appId: "app1",
        viewFields: {
          "11111": {
            appFieldId: "aaaaa",
          },
          "22222": {
            appFieldId: "bbbbb",
          },
        },
      },
      1: {
        mode: "modify",
        id: "2",
        appId: "app2",
        viewFields: {
          "11111": {
            appFieldId: "ccccc",
          },
          "22222": {
            appFieldId: "ddddd",
          },
        },
      },
    });
  });

  it("データを取得できなかった場合、空オブジェクトを返す", async () => {
    const data: GetViewQuery = {
      view: null,
    };

    const result = convertToInputViewApps(data);

    expect(result).toEqual({});
  });
});
