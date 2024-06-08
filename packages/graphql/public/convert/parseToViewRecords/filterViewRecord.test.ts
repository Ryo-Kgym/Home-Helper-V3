import * as judgeComplexity from "@oneforall/domain/complexity/judgeComplexity";
import { ViewRecordColumns } from "@oneforall/domain/schema/view/viewRecordSchema";

import { filterViewRecord } from "./filterViewRecord";

jest.mock("@oneforall/domain/complexity/judgeComplexity");

const viewRecordColumns: ViewRecordColumns = {
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

describe("filterViewRecord", () => {
  const judgeComplexityMock = jest.spyOn(judgeComplexity, "judgeComplexity");
  jest.spyOn(judgeComplexity, "judgeComplexity");

  beforeEach(() => {
    judgeComplexityMock.mockClear();
  });

  it("フィルターに合致する場合、trueを返す", () => {
    filterViewRecord(viewRecordColumns, {
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

    expect(judgeComplexityMock).toBeCalledWith([
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
    const actual = filterViewRecord(viewRecordColumns, {});

    expect(actual).toBe(true);
  });
});
