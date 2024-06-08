import { ViewRecords } from "@oneforall/domain/schema/view/viewRecordSchema";
import { ViewFields } from "@oneforall/domain/schema/view/viewSchema";

import { parseToViewRecords } from "./parseToViewRecords";
import { ViewAppsQuery } from "./type";

const viewFields: ViewFields = {
  vc1: {
    id: "vc1",
    fieldName: "vc1Name",
    fieldIndex: 1,
    fieldKind: "date",
    options: {
      format: "YYYY-MM-DD",
    },
  },
  vc2: {
    id: "vc2",
    fieldName: "vc2Name",
    fieldIndex: 2,
    fieldKind: "text",
    options: {},
  },
};

describe("convertToViewRecords", () => {
  it("正常に変換できた場合", () => {
    const viewApps: ViewAppsQuery = [
      {
        __typename: "ViewApp",
        id: "va1",
        appId: "app1",
        app: {
          __typename: "App",
          id: "app1",
          name: "appName1",
          records: [
            {
              __typename: "Record",
              id: "a1-r1",
              index: 1,
              columns: {
                c11: {
                  fieldKind: "date",
                  value: "2024-04-11T15:00:00.000Z",
                },
                c12: {
                  fieldKind: "text",
                  value: "aaa1",
                },
                c13: { fieldKind: "text", value: "aaa2" },
              },
            },
            {
              __typename: "Record",
              id: "a1-r2",
              index: 2,
              columns: {
                c11: {
                  fieldKind: "date",
                  value: "2024-04-12T15:00:00.000Z",
                },
                c12: {
                  fieldKind: "text",
                  value: "bbb1",
                },
                c13: { fieldKind: "text", value: "bbb2" },
              },
            },
          ],
        },
        fields: {
          vc1: {
            appFieldId: "c11",
          },
          vc2: {
            appFieldId: "c13",
          },
        },
      },
      {
        __typename: "ViewApp",
        id: "va2",
        appId: "app2",
        app: {
          __typename: "App",
          id: "app2",
          name: "appName2",
          records: [
            {
              __typename: "Record",
              id: "a2-r1",
              index: 1,
              columns: {
                c21: {
                  fieldKind: "date",
                  value: "2024-04-11T15:00:00.000Z",
                },
                c22: {
                  fieldKind: "text",
                  value: "ccc1",
                },
                c23: { fieldKind: "text", value: "ccc2" },
              },
            },
            {
              __typename: "Record",
              id: "a2-r2",
              index: 2,
              columns: {
                c21: {
                  fieldKind: "date",
                  value: "2024-04-12T15:00:00.000Z",
                },
                c22: {
                  fieldKind: "text",
                  value: "ddd1",
                },
                c23: { fieldKind: "text", value: "ddd2" },
              },
            },
          ],
        },
        fields: {
          vc1: {
            appFieldId: "c21",
          },
          vc2: {
            appFieldId: "c23",
          },
        },
      },
    ];

    expect(parseToViewRecords(viewFields, viewApps)).toStrictEqual<ViewRecords>(
      {
        "va1-a1-r1": {
          appId: "app1",
          appName: "appName1",
          recordId: "a1-r1",
          columns: {
            vc1: { fieldKind: "date", value: "2024-04-11T15:00:00.000Z" },
            vc2: { fieldKind: "text", value: "aaa2" },
          },
        },
        "va1-a1-r2": {
          appId: "app1",
          appName: "appName1",
          recordId: "a1-r2",
          columns: {
            vc1: { fieldKind: "date", value: "2024-04-12T15:00:00.000Z" },
            vc2: { fieldKind: "text", value: "bbb2" },
          },
        },
        "va2-a2-r1": {
          appId: "app2",
          appName: "appName2",
          recordId: "a2-r1",
          columns: {
            vc1: { fieldKind: "date", value: "2024-04-11T15:00:00.000Z" },
            vc2: { fieldKind: "text", value: "ccc2" },
          },
        },
        "va2-a2-r2": {
          appId: "app2",
          appName: "appName2",
          recordId: "a2-r2",
          columns: {
            vc1: { fieldKind: "date", value: "2024-04-12T15:00:00.000Z" },
            vc2: { fieldKind: "text", value: "ddd2" },
          },
        },
      },
    );
  });

  it("アプリレコードに指定するカラムが存在しない場合、空文字を入れる", () => {
    const viewApps: ViewAppsQuery = [
      {
        __typename: "ViewApp",
        id: "va1",
        appId: "app1",
        app: {
          __typename: "App",
          id: "app1",
          name: "appName1",
          records: [
            {
              __typename: "Record",
              id: "a1-r1",
              index: 1,
              columns: {
                c11: {
                  fieldKind: "date",
                  value: "2024-04-12T15:00:00.000Z",
                },
                c12: {
                  fieldKind: "text",
                  value: "aaa12",
                },
              },
            },
          ],
        },
        fields: {
          vc1: {
            appFieldId: "c11",
          },
          vc2: {
            appFieldId: "c13",
          },
        },
      },
    ];

    expect(parseToViewRecords(viewFields, viewApps)).toStrictEqual({
      "va1-a1-r1": {
        appId: "app1",
        appName: "appName1",
        recordId: "a1-r1",
        columns: {
          vc1: { fieldKind: "date", value: "2024-04-12T15:00:00.000Z" },
          vc2: { fieldKind: "text", value: "", options: {} },
        },
      },
    });
  });
});
