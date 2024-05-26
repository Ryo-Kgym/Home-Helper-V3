import * as fetchQuery from "@persistence/database/server/fetchQuery";

import { fetchLookupAppRecords } from "./fetchLookupAppRecords";

jest.mock("@persistence/database/server/fetchQuery");

describe("fetchLookupAppRecords", () => {
  it("期待した値が返されること", async () => {
    jest.spyOn(fetchQuery, "fetchQuery").mockResolvedValue({
      data: {
        __typename: "query_root",
        // @ts-expect-error - This is a mock
        apps: [
          {
            id: "app1",
            records: [
              {
                id: "r11",
                index: 0,
                columns: {
                  f11: {
                    fieldKind: "text",
                    value: "v1",
                  },
                  f12: {
                    fieldKind: "text",
                    value: "v2",
                  },
                },
              },
            ],
          },
          {
            id: "app2",
            records: [
              {
                id: "r21",
                index: 0,
                columns: {
                  f21: {
                    fieldKind: "text",
                    value: "v1",
                  },
                  f22: {
                    fieldKind: "text",
                    value: "v2",
                  },
                },
              },
            ],
          },
        ],
      },
      error: undefined,
    });

    const actual = await fetchLookupAppRecords(["app1", "app2"]);

    expect(actual).toStrictEqual({
      app1: {
        0: {
          recordId: "r11",
          isEditing: false,
          columns: {
            f11: {
              fieldKind: "text",
              value: "v1",
            },
            f12: {
              fieldKind: "text",
              value: "v2",
            },
          },
        },
      },
      app2: {
        0: {
          recordId: "r21",
          isEditing: false,
          columns: {
            f21: {
              fieldKind: "text",
              value: "v1",
            },
            f22: {
              fieldKind: "text",
              value: "v2",
            },
          },
        },
      },
    });
  });
});
