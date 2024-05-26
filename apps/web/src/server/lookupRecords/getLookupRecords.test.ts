import { App } from "@oneforall/domain/schema/appSchema";

import * as fetchLookupAppRecords from "./fetchLookupAppRecords";
import { getLookupRecords } from "./getLookupRecords";

describe("getLookupRecords", () => {
  it("内部の関数が期待通り呼び出され、期待通りの値が返されること", async () => {
    const app: App = {
      id: "1",
      name: "appName",
      fields: {
        f1: {
          id: "1",
          fieldName: "lookupField1",
          fieldKind: "lookup",
          fieldIndex: 1,
          options: {
            appId: "app1",
            saveFieldId: "save1",
            selectFieldId: "select1",
            sortFieldId: "sort1",
            sortDirection: "asc",
            filters: {},
          },
        },
        f2: {
          id: "2",
          fieldName: "lookupField2",
          fieldKind: "lookup",
          fieldIndex: 2,
          options: {
            appId: "app2",
            saveFieldId: "save2",
            selectFieldId: "select2",
            sortFieldId: "sort2",
            sortDirection: "asc",
            filters: {},
          },
        },
        f3: {
          id: "3",
          fieldName: "textField3",
          fieldKind: "text",
          fieldIndex: 3,
          options: {},
        },
      },
    };

    const fetchLookupAppRecordsSpy = jest.spyOn(
      fetchLookupAppRecords,
      "fetchLookupAppRecords",
    );

    fetchLookupAppRecordsSpy.mockResolvedValue({
      app1: {
        0: {
          recordId: "r1",
          isEditing: false,
          columns: {
            save1: {
              fieldKind: "text",
              value: "v11",
            },
            select1: {
              fieldKind: "multipleText",
              value: "v12",
            },
            sort1: {
              fieldKind: "selectBox",
              value: "v13",
            },
          },
        },
        1: {
          recordId: "r2",
          isEditing: false,
          columns: {
            save1: {
              fieldKind: "text",
              value: "v21",
            },
            select1: {
              fieldKind: "multipleText",
              value: "v22",
            },
            sort1: {
              fieldKind: "selectBox",
              value: "v23",
            },
          },
        },
      },
      app2: {
        0: {
          recordId: "r1",
          isEditing: false,
          columns: {
            save2: {
              fieldKind: "text",
              value: "v31",
            },
            select2: {
              fieldKind: "multipleText",
              value: "v32",
            },
            sort2: {
              fieldKind: "selectBox",
              value: "v33",
            },
          },
        },
      },
    });

    const actual = await getLookupRecords(app);

    expect(fetchLookupAppRecordsSpy).toBeCalledWith(["app1", "app2"]);

    expect(actual).toStrictEqual({
      f1: {
        v11: "v12",
        v21: "v22",
      },
      f2: {
        v31: "v32",
      },
    });
  });
  it("ルックアップしたいアプリのレコードが存在しない場合、値を空を返す", async () => {
    const app: App = {
      id: "1",
      name: "appName",
      fields: {
        f1: {
          id: "1",
          fieldName: "lookupField1",
          fieldKind: "lookup",
          fieldIndex: 1,
          options: {
            appId: "app1",
            saveFieldId: "save1",
            selectFieldId: "select1",
            sortFieldId: "sort1",
            sortDirection: "asc",
            filters: {},
          },
        },
      },
    };

    const fetchLookupAppRecordsSpy = jest.spyOn(
      fetchLookupAppRecords,
      "fetchLookupAppRecords",
    );

    fetchLookupAppRecordsSpy.mockResolvedValue({});

    const actual = await getLookupRecords(app);

    expect(fetchLookupAppRecordsSpy).toBeCalledWith(["app1", "app2"]);

    expect(actual).toStrictEqual({
      f1: {},
    });
  });
});
