import { convertToLookupOptions } from "./convertToLookupOptions";

describe("convertToLookupOptions", () => {
  it("期待通りの処理をできる", () => {
    const actual = convertToLookupOptions({
      id: "1",
      name: "appName",
      fields: {
        "1": {
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
        "2": {
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
        "3": {
          id: "3",
          fieldName: "textField3",
          fieldKind: "text",
          fieldIndex: 3,
          options: {},
        },
      },
    });

    expect(actual).toStrictEqual({
      "1": {
        appId: "app1",
        saveFieldId: "save1",
        selectFieldId: "select1",
        sortFieldId: "sort1",
        sortDirection: "asc",
        filters: {},
      },
      "2": {
        appId: "app2",
        saveFieldId: "save2",
        selectFieldId: "select2",
        sortFieldId: "sort2",
        sortDirection: "asc",
        filters: {},
      },
    });
  });
});
