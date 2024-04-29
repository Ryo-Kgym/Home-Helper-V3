import * as date from "./convertValueDate";
import * as selectbox from "./convertValueSelectbox";
import { switchValueConverter } from "./switchValueConverter";

jest.mock("./convertValueSelectbox");
jest.mock("./convertValueDate");

describe("switchValueConverter", () => {
  it("textの場合", () => {
    const actual = switchValueConverter("original", {
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
    const actual = switchValueConverter("original", {
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
    const actual = switchValueConverter("original", {
      id: "1",
      fieldName: "field",
      fieldKind: "lookup",
      fieldIndex: 0,
      options: {
        appId: "1",
        selectFieldId: "2",
        saveFieldId: "3",
        sortFieldId: "4",
        sortDirection: "asc",
      },
    });

    expect(actual).toEqual({
      originalValue: "original",
      value: "original",
      errorMessage: undefined,
    });
  });

  it("selectBoxの場合", () => {
    jest.spyOn(selectbox, "convertValueSelectbox").mockReturnValue({
      originalValue: "originalValue",
      value: "value",
      errorMessage: undefined,
    });

    const actual = switchValueConverter("original", {
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

    const actual = switchValueConverter("original", {
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
