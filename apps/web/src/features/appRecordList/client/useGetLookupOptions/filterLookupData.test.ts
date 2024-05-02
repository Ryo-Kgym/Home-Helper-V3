import { filterLookupData } from "@features/appRecordList/client/useGetLookupOptions/filterLookupData";
import { Record } from "@oneforall/domain/schema/recordSchema";

describe("filterLookupData", () => {
  const lookupRecord: Record = {
    recordId: "r1",
    isEditing: false,
    columns: {
      f1: {
        fieldKind: "text",
        value: "textValue",
      },
      f2: {
        fieldKind: "selectBox",
        value: "selectBoxValue",
      },
    },
  };

  it("フィルターが空のとき、true を返す", () => {
    const actual = filterLookupData(lookupRecord, {});

    expect(actual).toBeTruthy();
  });

  it("フィルターの全てに該当するとき、true を返す", () => {
    const actual = filterLookupData(lookupRecord, {
      0: {
        filterType: "static",
        fieldId: "f1",
        value: "textValue",
      },
      1: {
        filterType: "static",
        fieldId: "f2",
        value: "selectBoxValue",
      },
    });

    expect(actual).toBeTruthy();
  });

  it("フィルターの1つ目に該当するとき、true を返す", () => {
    const actual = filterLookupData(lookupRecord, {
      0: {
        filterType: "static",
        fieldId: "f1",
        value: "textValue",
      },
      1: {
        filterType: "static",
        fieldId: "f2",
        value: "otherValue",
      },
    });

    expect(actual).toBeTruthy();
  });

  it("フィルターの2つ目に該当するとき、true を返す", () => {
    const actual = filterLookupData(lookupRecord, {
      0: {
        filterType: "static",
        fieldId: "f1",
        value: "otherValue",
      },
      1: {
        filterType: "static",
        fieldId: "f2",
        value: "selectBoxValue",
      },
    });

    expect(actual).toBeTruthy();
  });

  it("フィルターに該当するものがないとき、false を返す", () => {
    const actual = filterLookupData(lookupRecord, {
      0: {
        filterType: "static",
        fieldId: "f1",
        value: "otherValue",
      },
      1: {
        filterType: "static",
        fieldId: "f2",
        value: "otherValue",
      },
    });

    expect(actual).toBeFalsy();
  });
});
