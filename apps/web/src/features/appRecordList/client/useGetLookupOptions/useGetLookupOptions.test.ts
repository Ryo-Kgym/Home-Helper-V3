import { useGetLookupOptions } from "@features/appRecordList/client/useGetLookupOptions/useGetLookupOptions";
import * as convertToRecordsMock from "@features/appRecordList/server/convertToRecords";
import { renderHook } from "@testing-library/react";
import * as useGetRecordsQueryMock from "@v3/graphql/public";

jest.mock("@v3/graphql/public");

describe("convertToImportHistories", () => {
  const columns1 = {
    selectFieldId: {
      fieldKind: "text",
      value: "r11",
    },
    saveFieldId: {
      fieldKind: "text",
      value: "r12",
    },
    sortFieldId: {
      fieldKind: "text",
      value: "r13",
    },
  };

  const columns2 = {
    selectFieldId: {
      fieldKind: "text",
      value: "r21",
    },
    saveFieldId: {
      fieldKind: "text",
      value: "r22",
    },
    sortFieldId: {
      fieldKind: "text",
      value: "r23",
    },
  };

  it("内部の関数が期待された引数で実行されること", () => {
    jest.spyOn(useGetRecordsQueryMock, "useGetRecordsQuery").mockReturnValue([
      {
        data: {
          records: [
            {
              __typename: "Record",
              id: "r1",
              index: 1,
              columns: columns1,
            },
            {
              __typename: "Record",
              id: "r2",
              index: 2,
              columns: columns2,
            },
          ],
        },
        fetching: false,
        stale: false,
        error: undefined,
      },
      jest.fn(),
    ]);
    jest.spyOn(convertToRecordsMock, "convertToRecords");

    renderHook(() =>
      useGetLookupOptions({
        options: {
          appId: "appId",
          selectFieldId: "selectFieldId",
          saveFieldId: "saveFieldId",
          sortFieldId: "sortFieldId",
          sortDirection: "desc",
          filters: {},
        },
        columns: {},
      }),
    ).result.current;

    expect(useGetRecordsQueryMock.useGetRecordsQuery).toHaveBeenCalledWith({
      variables: { appId: "appId" },
    });

    expect(convertToRecordsMock.convertToRecords).toHaveBeenCalledWith([
      {
        __typename: "Record",
        id: "r1",
        index: 1,
        columns: columns1,
      },
      {
        __typename: "Record",
        id: "r2",
        index: 2,
        columns: columns2,
      },
    ]);
  });

  it("selectFieldId, saveFieldId が存在する場合", () => {
    jest.spyOn(useGetRecordsQueryMock, "useGetRecordsQuery");
    jest.spyOn(convertToRecordsMock, "convertToRecords").mockReturnValue({
      1: {
        recordId: "r1",
        isEditing: false,
        columns: {
          selectFieldId: {
            fieldKind: "text",
            value: "r11",
          },
          saveFieldId: {
            fieldKind: "text",
            value: "r12",
          },
          sortFieldId: {
            fieldKind: "text",
            value: "r13",
          },
        },
      },
      2: {
        recordId: "r2",
        isEditing: false,
        columns: {
          selectFieldId: {
            fieldKind: "text",
            value: "r21",
          },
          saveFieldId: {
            fieldKind: "text",
            value: "r22",
          },
          sortFieldId: {
            fieldKind: "text",
            value: "r23",
          },
        },
      },
    });

    const { lookupData } = renderHook(() =>
      useGetLookupOptions({
        options: {
          appId: "appId",
          selectFieldId: "selectFieldId",
          saveFieldId: "saveFieldId",
          sortFieldId: "sortFieldId",
          sortDirection: "desc",
          filters: {},
        },
        columns: {},
      }),
    ).result.current;

    expect(lookupData).toStrictEqual([
      {
        label: "r21",
        value: "r22",
      },
      {
        label: "r11",
        value: "r12",
      },
    ]);
  });

  it("selectFieldId, saveFieldId が存在しない場合", () => {
    jest.spyOn(useGetRecordsQueryMock, "useGetRecordsQuery");
    jest.spyOn(convertToRecordsMock, "convertToRecords").mockReturnValue({
      1: {
        recordId: "r1",
        isEditing: false,
        columns: {
          selectFieldId: {
            fieldKind: "text",
            value: "r11",
          },
          saveFieldId: {
            fieldKind: "text",
            value: "r12",
          },
          sortFieldId: {
            fieldKind: "text",
            value: "r13",
          },
        },
      },
      2: {
        recordId: "r2",
        isEditing: false,
        columns: {
          selectFieldId: {
            fieldKind: "text",
            value: "r21",
          },
          saveFieldId: {
            fieldKind: "text",
            value: "r22",
          },
          sortFieldId: {
            fieldKind: "text",
            value: "r23",
          },
        },
      },
    });

    const { lookupData } = renderHook(() =>
      useGetLookupOptions({
        options: {
          appId: "appId",
          selectFieldId: "dummy",
          saveFieldId: "dummy",
          sortFieldId: "sortFieldId",
          sortDirection: "desc",
          filters: {},
        },
        columns: {},
      }),
    ).result.current;

    expect(lookupData).toStrictEqual([
      {
        label: "",
        value: "",
      },
      {
        label: "",
        value: "",
      },
    ]);
  });
});
