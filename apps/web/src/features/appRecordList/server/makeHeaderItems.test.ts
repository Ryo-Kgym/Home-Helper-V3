import { makeHeaderItems } from "@features/appRecordList/server/makeHeaderItems";
import { Fields } from "@oneforall/domain/schema/appSchema";

describe("makeHeaderItems", () => {
  it("fields が空でない場合", () => {
    // Arrange
    const fields: Fields = {
      f1: {
        id: "f1",
        fieldName: "field1",
        fieldKind: "text",
        fieldIndex: 0,
        options: {},
      },
      f2: {
        id: "f2",
        fieldName: "field2",
        fieldKind: "text",
        fieldIndex: 1,
        options: {},
      },
    };

    // Act
    const result = makeHeaderItems(fields);

    // Assert
    expect(result).toEqual([
      { name: "No." },
      { name: "field1" },
      { name: "field2" },
      { name: "" },
    ]);
  });

  it("fields が空の場合", () => {
    // Arrange
    const fields: Fields = {};

    // Act
    const result = makeHeaderItems(fields);

    // Assert
    expect(result).toEqual([{ name: "No." }, { name: "" }]);
  });
});
