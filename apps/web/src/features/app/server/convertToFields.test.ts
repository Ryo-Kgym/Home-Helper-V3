import { convertToFields } from "./convertToFields";

describe("convertToFields", () => {
  it("fieldType: text の場合", () => {
    const data: Parameters<typeof convertToFields>[0] = [
      {
        __typename: "Field",
        id: "1",
        name: "Field 1",
        fieldKind: "text",
        index: 0,
        options: {},
      },
    ];
    const expectedFields = {
      "1": {
        id: "1",
        fieldName: "Field 1",
        fieldKind: "text",
        fieldIndex: 0,
        options: {},
      },
    };

    const actual = convertToFields(data);
    expect(actual).toEqual(expectedFields);
  });

  it("fieldType: multipleText の場合", () => {
    const data: Parameters<typeof convertToFields>[0] = [
      {
        __typename: "Field",
        id: "2",
        name: "Field 2",
        fieldKind: "multipleText",
        index: 2,
        options: {},
      },
    ];
    const expectedFields = {
      "2": {
        id: "2",
        fieldName: "Field 2",
        fieldKind: "multipleText",
        fieldIndex: 2,
        options: {},
      },
    };

    const actual = convertToFields(data);
    expect(actual).toEqual(expectedFields);
  });

  it("fieldType: selectBox の場合", () => {
    const data: Parameters<typeof convertToFields>[0] = [
      {
        __typename: "Field",
        id: "3",
        name: "Field 3",
        fieldKind: "selectBox",
        index: 1,
        options: {
          selector: [
            {
              label: "Option 1",
              value: "option1",
            },
            {
              label: "Option 2",
              value: "option2",
            },
          ],
        },
      },
    ];
    const expectedFields = {
      "3": {
        id: "3",
        fieldName: "Field 3",
        fieldKind: "selectBox",
        fieldIndex: 1,
        options: {
          selector: [
            {
              label: "Option 1",
              value: "option1",
            },
            {
              label: "Option 2",
              value: "option2",
            },
          ],
        },
      },
    };

    const actual = convertToFields(data);
    expect(actual).toEqual(expectedFields);
  });

  it("fieldType: lookup の場合", () => {
    const data: Parameters<typeof convertToFields>[0] = [
      {
        __typename: "Field",
        id: "4",
        name: "Field 4",
        fieldKind: "lookup",
        index: 3,
        options: {
          appId: "5",
          selectFieldId: "6",
          saveFieldId: "7",
          sortFieldId: "8",
          sortDirection: "asc",
          filters: {
            "0": {
              fieldId: "9",
              value: "value",
              complexity: "and",
            },
          },
        },
      },
    ];
    const expectedFields = {
      "4": {
        id: "4",
        fieldName: "Field 4",
        fieldKind: "lookup",
        fieldIndex: 3,
        options: {
          appId: "5",
          selectFieldId: "6",
          saveFieldId: "7",
          sortFieldId: "8",
          sortDirection: "asc",
          filters: {
            "0": {
              fieldId: "9",
              value: "value",
              complexity: "and",
            },
          },
        },
      },
    };

    const actual = convertToFields(data);
    expect(actual).toEqual(expectedFields);
  });

  it("fieldType: date の場合", () => {
    const data: Parameters<typeof convertToFields>[0] = [
      {
        __typename: "Field",
        id: "5",
        name: "Field 5",
        fieldKind: "date",
        index: 4,
        options: {
          format: "YYYY-MM-DD",
        },
      },
    ];
    const expectedFields = {
      "5": {
        id: "5",
        fieldName: "Field 5",
        fieldKind: "date",
        fieldIndex: 4,
        options: {
          format: "YYYY-MM-DD",
        },
      },
    };

    const actual = convertToFields(data);
    expect(actual).toEqual(expectedFields);
  });
});
