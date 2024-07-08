import { ViewAppRaw } from "@oneforall/domain/schema/view/viewAppSchema";
import { ViewRecords } from "@oneforall/domain/schema/view/viewRecordSchema";
import { ViewFields } from "@oneforall/domain/schema/view/viewSchema";

import { parseToViewRecords } from "./parseToViewRecords";

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

describe("parseToViewRecords", () => {
  it("正常に変換できた場合", () => {
    const viewApps: ViewAppRaw[] = [
      {
        id: "va1",
        app: {
          id: "app1",
          name: "appName1",
          records: [
            {
              recordId: "a1-r1",
              isEditing: false,
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
              recordId: "a1-r2",
              isEditing: false,
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
        viewAppFields: {
          vc1: {
            appFieldId: "c11",
          },
          vc2: {
            appFieldId: "c13",
          },
        },
      },
      {
        id: "va2",
        app: {
          id: "app2",
          name: "appName2",
          records: [
            {
              recordId: "a2-r1",
              isEditing: false,
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
              recordId: "a2-r2",
              isEditing: false,
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
        viewAppFields: {
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
          viewAppId: "va1",
          appId: "app1",
          appName: "appName1",
          recordId: "a1-r1",
          columns: {
            vc1: { fieldKind: "date", value: "2024-04-11T15:00:00.000Z" },
            vc2: { fieldKind: "text", value: "aaa2" },
          },
        },
        "va1-a1-r2": {
          viewAppId: "va1",
          appId: "app1",
          appName: "appName1",
          recordId: "a1-r2",
          columns: {
            vc1: { fieldKind: "date", value: "2024-04-12T15:00:00.000Z" },
            vc2: { fieldKind: "text", value: "bbb2" },
          },
        },
        "va2-a2-r1": {
          viewAppId: "va2",
          appId: "app2",
          appName: "appName2",
          recordId: "a2-r1",
          columns: {
            vc1: { fieldKind: "date", value: "2024-04-11T15:00:00.000Z" },
            vc2: { fieldKind: "text", value: "ccc2" },
          },
        },
        "va2-a2-r2": {
          viewAppId: "va2",
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

  it("filterの指定がある場合", () => {
    const viewApps: ViewAppRaw[] = [
      {
        id: "va1",
        app: {
          id: "app1",
          name: "appName1",
          records: [
            {
              recordId: "a1-r1",
              isEditing: false,
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
              recordId: "a1-r2",
              isEditing: false,
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
        viewAppFields: {
          vc1: {
            appFieldId: "c11",
          },
          vc2: {
            appFieldId: "c13",
          },
        },
      },
      {
        id: "va2",
        app: {
          id: "app2",
          name: "appName2",
          records: [
            {
              recordId: "a2-r1",
              isEditing: false,
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
              recordId: "a2-r2",
              isEditing: false,
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
        viewAppFields: {
          vc1: {
            appFieldId: "c21",
          },
          vc2: {
            appFieldId: "c23",
          },
        },
      },
    ];

    expect(
      parseToViewRecords(viewFields, viewApps, {
        "0": {
          fieldId: "vc2",
          fieldKind: "text",
          operator: "eq",
          value: "bbb2",
          filterComplexity: "and",
        },
      }),
    ).toStrictEqual<ViewRecords>({
      "va1-a1-r2": {
        viewAppId: "va1",
        appId: "app1",
        appName: "appName1",
        recordId: "a1-r2",
        columns: {
          vc1: { fieldKind: "date", value: "2024-04-12T15:00:00.000Z" },
          vc2: { fieldKind: "text", value: "bbb2" },
        },
      },
    });
  });

  it("アプリレコードに指定するカラムが存在しない場合、空文字を入れる", () => {
    const viewApps: ViewAppRaw[] = [
      {
        id: "va1",
        app: {
          id: "app1",
          name: "appName1",
          records: [
            {
              recordId: "a1-r1",
              isEditing: false,
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
        viewAppFields: {
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
        viewAppId: "va1",
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
