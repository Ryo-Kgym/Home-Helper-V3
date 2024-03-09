import type { Fields } from "@feature/app/schema/app-schema";

import { makeRecordTemplate } from "./make-record-template";

describe("makeRecordTemplate", () => {
  it("should make a record template", () => {
    const fields: Fields = {
      "11111": { fieldName: "test1", fieldKind: "text", fieldIndex: 0 },
      "22222": {
        fieldName: "test2",
        fieldKind: "selectBox",
        fieldIndex: 1,
      },
    };

    const actual = makeRecordTemplate(fields);

    expect(actual).toEqual({
      "11111": { fieldKind: "text", value: "" },
      "22222": { fieldKind: "selectBox", value: "" },
    });
  });
});
