import * as judgeComplexity from "@oneforall/domain/complexity/judgeComplexity";
import { Record, RecordColumns } from "@oneforall/domain/schema/recordSchema";

import { filterLookupData } from "./filterLookupData";

jest.mock("@oneforall/domain/complexity/judgeComplexity");

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
  const thisAppColumns: RecordColumns = {
    c1: {
      fieldKind: "text",
      value: "textValue",
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

  it("judgeComplexity に期待する値が渡されること ", () => {
    const judgeComplexitySpy = jest
      .spyOn(judgeComplexity, "judgeComplexity")
      .mockReturnValue(true);

    filterLookupData(
      lookupRecord,
      {
        0: {
          fieldId: "lc1",
          complexity: "and",
          filterType: "value",
          value: "textValue",
        },
        1: {
          fieldId: "lc1",
          complexity: "or",
          filterType: "value",
          value: "dummy",
        },
        2: {
          fieldId: "lc2",
          complexity: "and",
          filterType: "field",
          value: "c2",
        },
        3: {
          fieldId: "lc2",
          complexity: "or",
          filterType: "field",
          value: "c3",
        },
      },
      thisAppColumns,
    );

    expect(judgeComplexitySpy).toBeCalledWith([
      {
        complexity: "and",
        result: true,
      },
      {
        complexity: "or",
        result: false,
      },
      {
        complexity: "and",
        result: true,
      },
      {
        complexity: "or",
        result: false,
      },
    ]);
  });
});
