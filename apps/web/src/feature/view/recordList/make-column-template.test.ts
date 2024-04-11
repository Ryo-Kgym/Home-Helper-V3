import { Fields } from "@oneforall/domain/schema";

import { makeColumnsTemplate } from "./make-columns-template";

describe("makeRecordTemplate", () => {
  it("should make a record template", () => {
    const fields: Fields = {
      "11111": {
        id: "11111",
        fieldName: "test1",
        fieldKind: "text",
        fieldIndex: 0,
        options: {},
      },
      "22222": {
        id: "22222",
        fieldName: "test2",
        fieldKind: "selectBox",
        fieldIndex: 1,
        options: {
          selector: [
            {
              value: "1",
              label: "1",
            },
          ],
        },
      },
    };

    const actual = makeColumnsTemplate(fields);

    expect(actual).toEqual({
      "11111": { fieldKind: "text", value: "" },
      "22222": { fieldKind: "selectBox", value: "" },
    });
  });
});
