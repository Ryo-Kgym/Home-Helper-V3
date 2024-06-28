import * as judgeComplexity from "@oneforall/domain/complexity/judgeComplexity";
import { RecordColumns } from "@oneforall/domain/schema/recordSchema";

import { filterAppRecords } from "./filterAppRecords";

jest.mock("@oneforall/domain/complexity/judgeComplexity");

const recordColumns: RecordColumns = {
  vc1: {
    fieldKind: "date",
    options: {
      label: "vc1Name",
    },
    value: "2024-04-11T15:00:00.000Z",
  },
  vc2: {
    fieldKind: "text",
    options: {
      label: "vc2Name",
    },
    value: "bbb",
  },
};

describe("filterAppRecords", () => {
  const judgeComplexityMock = jest.spyOn(judgeComplexity, "judgeComplexity");
  jest.spyOn(judgeComplexity, "judgeComplexity");

  beforeEach(() => {
    judgeComplexityMock.mockClear();
  });

  it("フィルターを評価して、計算関数に期待する引数を渡す", () => {
    filterAppRecords(recordColumns, {
      0: {
        fieldId: "vc2",
        fieldKind: "text",
        operator: "eq",
        value: "bbb",
        filterComplexity: "and",
      },
      1: {
        fieldId: "vc1",
        fieldKind: "date",
        operator: "eq",
        value: "2024-04-11T15:00:00.000Z",
        filterComplexity: "and",
      },
      2: {
        fieldId: "vc2",
        fieldKind: "text",
        operator: "eq",
        value: "zzz",
        filterComplexity: "or",
      },
    });

    expect(judgeComplexityMock).toHaveBeenCalledWith([
      {
        complexity: "and",
        result: true,
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
  it("フィルターが存在しない場合、trueを返す", () => {
    const actual = filterAppRecords(recordColumns, {});

    expect(actual).toBe(true);
  });
});
