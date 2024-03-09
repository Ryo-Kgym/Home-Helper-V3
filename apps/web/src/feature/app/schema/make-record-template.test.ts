import type { Fields } from "@feature/app/schema/app-schema";

import { makeRecordTemplate } from "./make-record-template";

describe("makeRecordTemplate", () => {
  it("should make a record template", () => {
    const fields: Fields = {
      1: { fieldName: "test1", fieldKind: "text" },
      2: {
        fieldName: "test2",
        fieldKind: "selectBox",
      },
    };

    const actual = makeRecordTemplate(fields);

    expect(actual).toEqual({
      1: { fieldId: 1, fieldKind: "text", value: "", editing: true },
      2: { fieldId: 2, fieldKind: "selectBox", value: "", editing: true },
    });
  });
});
