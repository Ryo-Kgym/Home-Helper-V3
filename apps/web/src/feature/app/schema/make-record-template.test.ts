import type { Field } from "@feature/app/schema/app-schema";

import { makeRecordTemplate } from "./make-record-template";

describe("makeRecordTemplate", () => {
  it("should make a record template", () => {
    const fields: Field = {
      1: { fieldName: "test1", fieldKind: "text" },
      2: {
        fieldName: "test2",
        fieldKind: "selectBox",
      },
    };

    const actual = makeRecordTemplate(fields);

    expect(actual).toEqual({
      1: { fieldId: 1, fieldKind: "text", value: "", confirmed: false },
      2: { fieldId: 2, fieldKind: "selectBox", value: "", confirmed: false },
    });
  });
});
