import { PreviewRecords } from "@oneforall/domain/schema";

import { convertToRecordObjects } from "./convert-to-record-objects";

describe("convertToRecordObjects", () => {
  it("should convert to record objects", () => {
    const appId = "appId";
    const previewRecords: PreviewRecords = {
      r1: {
        recordId: "r1",
        isEditing: false,
        columns: {
          c1: {
            fieldKind: "text",
            value: "value1",
            originalValue: "value1",
            errorMessage: "message",
          },
          c2: {
            fieldKind: "multipleText",
            value: "value2",
            originalValue: "value2",
            errorMessage: "message",
          },
        },
      },
      r2: {
        recordId: "r2",
        isEditing: false,
        columns: {
          c1: {
            fieldKind: "text",
            value: "value1",
            originalValue: "value1",
            errorMessage: "message",
          },
          c2: {
            fieldKind: "text",
            value: "value2",
            originalValue: "value2",
            errorMessage: "message",
          },
        },
      },
    };
    const recordIds = ["recordId1", "recordId2"];
    const currentMaxIndex = 0;
    const actual = convertToRecordObjects(
      appId,
      previewRecords,
      recordIds,
      currentMaxIndex,
    );
    expect(actual).toStrictEqual([
      {
        id: "recordId1",
        appId: "appId",
        columns: {
          c1: {
            fieldKind: "text",
            value: "value1",
          },
          c2: {
            fieldKind: "multipleText",
            value: "value2",
          },
        },
        index: 1,
      },
      {
        id: "recordId2",
        appId: "appId",
        columns: {
          c1: {
            fieldKind: "text",
            value: "value1",
          },
          c2: {
            fieldKind: "text",
            value: "value2",
          },
        },
        index: 2,
      },
    ]);
  });
});
