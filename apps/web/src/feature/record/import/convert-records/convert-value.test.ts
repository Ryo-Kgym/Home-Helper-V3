import { convertValue } from "@feature/record/import/convert-records/convert-value";

import * as date from "./convert-value-date";
import * as selectbox from "./convert-value-selectbox";

jest.mock("./convert-value-selectbox");
jest.mock("./convert-value-date");

describe("convertValue", () => {
  it("textの場合", () => {
    const actual = convertValue("original", {
      id: "1",
      fieldName: "field",
      fieldKind: "text",
      fieldIndex: 0,
      options: {},
    });

    expect(actual).toEqual({
      originalValue: "original",
      value: "original",
      errorMessage: undefined,
    });
  });

  it("multipleTextの場合", () => {
    const actual = convertValue("original", {
      id: "1",
      fieldName: "field",
      fieldKind: "multipleText",
      fieldIndex: 0,
      options: {},
    });

    expect(actual).toEqual({
      originalValue: "original",
      value: "original",
      errorMessage: undefined,
    });
  });

  it("lookupの場合", () => {
    const actual = convertValue("original", {
      id: "1",
      fieldName: "field",
      fieldKind: "lookup",
      fieldIndex: 0,
      options: {
        appId: "1",
        selectFieldId: "2",
        saveFieldId: "3",
      },
    });

    expect(actual).toEqual({
      originalValue: "original",
      value: "original",
      errorMessage: undefined,
    });
  });

  it("selectBoxの場合", () => {
    jest.spyOn(selectbox, "convertValueSelectBox").mockReturnValue({
      originalValue: "originalValue",
      value: "value",
      errorMessage: undefined,
    });

    const actual = convertValue("original", {
      id: "1",
      fieldName: "field",
      fieldKind: "selectBox",
      fieldIndex: 0,
      options: {
        selector: [
          {
            value: "v1",
            label: "l1",
          },
          {
            value: "v2",
            label: "l2",
          },
        ],
      },
    });

    expect(actual).toEqual({
      originalValue: "originalValue",
      value: "value",
      errorMessage: undefined,
    });
  });

  it("dateの場合", () => {
    jest.spyOn(date, "convertValueDate").mockReturnValue({
      originalValue: "2024-01-01",
      value: "2024-01-01T00:00:00,000Z",
      errorMessage: undefined,
    });

    const actual = convertValue("original", {
      id: "1",
      fieldName: "field",
      fieldKind: "date",
      fieldIndex: 0,
      options: {
        format: "YYYY-MM-DD",
      },
    });

    expect(actual).toEqual({
      originalValue: "2024-01-01",
      value: "2024-01-01T00:00:00,000Z",
      errorMessage: undefined,
    });
  });
});
