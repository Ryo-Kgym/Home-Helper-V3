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
        fieldId: "f1",
        value: "textValue",
        complexity: "and",
      },
      1: {
        fieldId: "f2",
        value: "selectBoxValue",
        complexity: "and",
      },
    });

    expect(actual).toBeTruthy();
  });

  it("フィルターの1つ目に該当するとき、true を返す", () => {
    const actual = filterLookupData(lookupRecord, {
      0: {
        fieldId: "f1",
        value: "textValue",
        complexity: "and",
      },
      1: {
        fieldId: "f2",
        value: "otherValue",
        complexity: "and",
      },
    });

    expect(actual).toBeTruthy();
  });

  it("フィルターの2つ目に該当するとき、true を返す", () => {
    const actual = filterLookupData(lookupRecord, {
      0: {
        fieldId: "f1",
        value: "otherValue",
        complexity: "and",
      },
      1: {
        fieldId: "f2",
        value: "selectBoxValue",
        complexity: "and",
      },
    });

    expect(actual).toBeTruthy();
  });

  it("フィルターに該当するものがないとき、false を返す", () => {
    const actual = filterLookupData(lookupRecord, {
      0: {
        fieldId: "f1",
        value: "otherValue",
        complexity: "and",
      },
      1: {
        fieldId: "f2",
        value: "otherValue",
        complexity: "and",
      },
    });

    expect(actual).toBeFalsy();
  });
});
