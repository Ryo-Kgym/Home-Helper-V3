import { filterLookupData } from "@features/appRecordList/client/useGetLookupOptions/filterLookupData";
import { Columns, Record } from "@oneforall/domain/schema/recordSchema";

describe("filterLookupData", () => {
  const lookupRecord: Record = {
    recordId: "r1",
    isEditing: false,
    columns: {
      lc1: {
        fieldKind: "text",
        value: "textValue",
      },
      lc2: {
        fieldKind: "selectBox",
        value: "selectBoxValue",
      },
    },
  };
  const thisAppColumns: Columns = {
    c1: {
      fieldKind: "text",
      value: "c1Value",
    },
    c2: {
      fieldKind: "selectBox",
      value: "selectBoxValue",
    },
  };

  it("フィルターが空のとき、true を返す", () => {
    const actual = filterLookupData(lookupRecord, {}, {});

    expect(actual).toBeTruthy();
  });

  it("フィルターの全てに該当するとき、true を返す", () => {
    const actual = filterLookupData(
      lookupRecord,
      {
        0: {
          fieldId: "lc1",
          complexity: "and",
          filterType: "value",
          value: "textValue",
        },
        1: {
          fieldId: "lc2",
          complexity: "and",
          filterType: "field",
          value: "c1",
        },
      },
      thisAppColumns,
    );

    expect(actual).toBeTruthy();
  });

  it("フィルターの1つ目に該当するとき、true を返す", () => {
    const actual = filterLookupData(
      lookupRecord,
      {
        0: {
          fieldId: "lc1",
          complexity: "and",
          filterType: "value",
          value: "textValue",
        },
        1: {
          fieldId: "lc2",
          complexity: "and",
          filterType: "field",
          value: "c1",
        },
      },
      thisAppColumns,
    );

    expect(actual).toBeTruthy();
  });

  it("フィルターの2つ目に該当するとき、true を返す", () => {
    const actual = filterLookupData(
      lookupRecord,
      {
        0: {
          fieldId: "lc1",
          complexity: "and",
          filterType: "value",
          value: "notFound",
        },
        1: {
          fieldId: "lc2",
          complexity: "and",
          filterType: "field",
          value: "c2",
        },
      },
      thisAppColumns,
    );

    expect(actual).toBeTruthy();
  });

  it("フィルターに該当するものがないとき、false を返す", () => {
    const actual = filterLookupData(
      lookupRecord,
      {
        0: {
          fieldId: "lc1",
          complexity: "and",
          filterType: "value",
          value: "notFound",
        },
        1: {
          fieldId: "lc2",
          complexity: "and",
          filterType: "field",
          value: "c3",
        },
      },
      thisAppColumns,
    );

    expect(actual).toBeFalsy();
  });
});
