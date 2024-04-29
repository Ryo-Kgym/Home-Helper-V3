import { convertToViewRecords } from "@feature/view/recordList/convertToViewRecords";
import { GetViewRecordsSourceQuery } from "@v3/graphql/public/type";

import { ViewRecords } from "../../../../../../packages/domain/schema/view/viewRecordSchema";

describe("convertToViewRecords", () => {
  it("正常に変換できた場合", () => {
    const testData: GetViewRecordsSourceQuery = {
      view: {
        __typename: "View",
        id: "view1",
        viewApps: [
          {
            id: "va1",
            appId: "app1",
            app: {
              name: "appName1",
              records: [
                {
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
            id: "va2",
            appId: "app2",
            app: {
              name: "appName2",
              records: [
                {
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
        ],
      },
    };

    expect(convertToViewRecords(testData)).toStrictEqual<ViewRecords>({
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
    });
  });

  it("viewAppFieldSchema の通りparseできなかった場合", () => {
    const testData: GetViewRecordsSourceQuery = {
      view: {
        __typename: "View",
        id: "view1",
        viewApps: [
          {
            id: "va1",
            appId: "app1",
            app: {
              name: "appName1",
              records: [
                {
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
              ],
            },
            fields: {
              vc1: {
                dummy: "c11",
              },
              vc2: {
                appFieldId: "c13",
              },
            },
          },
        ],
      },
    };

    expect(() => convertToViewRecords(testData)).toThrowError(
      "invalid viewAppFieldSchema",
    );
  });

  it("viewRecordColumnSchema の通りparseできなかった場合", () => {
    const testData: GetViewRecordsSourceQuery = {
      view: {
        __typename: "View",
        id: "view1",
        viewApps: [
          {
            id: "va1",
            appId: "app1",
            app: {
              name: "app1",
              records: [
                {
                  id: "a1-r1",
                  index: 1,
                  columns: {
                    c11: {
                      fieldKind: "date",
                    },
                    c12: {
                      fieldKind: "text",
                      value: "aaa1",
                    },
                    c13: { fieldKind: "text", value: "aaa2" },
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
        ],
      },
    };

    expect(() => convertToViewRecords(testData)).toThrowError(
      "invalid viewRecordColumnSchema",
    );
  });
});
