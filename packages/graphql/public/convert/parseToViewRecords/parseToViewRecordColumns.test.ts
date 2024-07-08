import { ViewFields } from "@oneforall/domain/schema/view/viewSchema";

import { parseToViewRecordColumns } from "./parseToViewRecordColumns";

describe("parseToViewRecordColumns", () => {
  const viewFields: ViewFields = {
    vf1: {
      id: "vf1",
      fieldKind: "text",
      options: {},
      fieldIndex: 0,
      fieldName: "fieldName1",
    },
  };

  it("パースに成功した場合", () => {
    const actual = parseToViewRecordColumns(
      viewFields,
      {
        vf1: {
          appFieldId: "af1",
        },
      },
      {
        recordId: "r1",
        isEditing: false,
        columns: {
          af1: {
            fieldKind: "text",
            value: "value",
            options: {
              label: "label",
            },
          },
        },
      },
    );

    expect(actual).toEqual({
      vf1: {
        fieldKind: "text",
        value: "value",
        options: {
          label: "label",
        },
      },
    });
  });

  it("パースに失敗した場合", () => {
    const actual = parseToViewRecordColumns(
      viewFields,
      {
        vf1: {
          appFieldId: "af1",
        },
      },
      {
        recordId: "r1",
        isEditing: false,
        columns: {}, // データがない
      },
    );

    expect(actual).toEqual({
      vf1: {
        fieldKind: "text",
        value: "",
        options: {},
      },
    });
  });
});
