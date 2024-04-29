import { Field, Fields } from "@oneforall/domain/schema";
import { makeInvertFieldMapping } from "@pages/appRecordImport/client/convertRecords/makeInvertFieldMapping";

describe("makeInvertFieldMapping", () => {
  const testFields: Fields = {
    f1: {
      id: "f1",
      fieldName: "フィールド1",
      fieldKind: "text",
      fieldIndex: 0,
      options: {},
    },
    f2: {
      id: "f2",
      fieldName: "フィールド2",
      fieldKind: "text",
      fieldIndex: 1,
      options: {},
    },
  };

  it("全てに対応する fieldMapping が存在する場合", () => {
    const actual = makeInvertFieldMapping(
      {
        f1: {
          fieldName: "フィールド1",
          fileColumnIndex: 0,
        },
        f2: {
          fieldName: "フィールド2",
          fileColumnIndex: 1,
        },
      },
      testFields,
    );

    expect(actual).toStrictEqual<Record<number, Field>>({
      0: {
        id: "f1",
        fieldName: "フィールド1",
        fieldKind: "text",
        fieldIndex: 0,
        options: {},
      },
      1: {
        id: "f2",
        fieldName: "フィールド2",
        fieldKind: "text",
        fieldIndex: 1,
        options: {},
      },
    });
  });

  it("fileColumnIndex がnullのfieldMappingが存在する場合", () => {
    const actual = makeInvertFieldMapping(
      {
        f1: {
          fieldName: "フィールド1",
          fileColumnIndex: null,
        },
        f2: {
          fieldName: "フィールド2",
          fileColumnIndex: 1,
        },
      },
      testFields,
    );

    expect(actual).toStrictEqual<Record<number, Field>>({
      1: {
        id: "f2",
        fieldName: "フィールド2",
        fieldKind: "text",
        fieldIndex: 1,
        options: {},
      },
    });
  });

  it("すべての fileColumnIndex がnullの場合", () => {
    const actual = makeInvertFieldMapping(
      {
        f1: {
          fieldName: "フィールド1",
          fileColumnIndex: null,
        },
        f2: {
          fieldName: "フィールド2",
          fileColumnIndex: null,
        },
      },
      testFields,
    );

    expect(actual).toStrictEqual<Record<number, Field>>({});
  });

  it("同じ値の fileColumnIndex が存在する場合", () => {
    const actual = makeInvertFieldMapping(
      {
        f1: {
          fieldName: "フィールド1",
          fileColumnIndex: 1,
        },
        f2: {
          fieldName: "フィールド2",
          fileColumnIndex: 1,
        },
      },
      testFields,
    );

    expect(actual).toStrictEqual<Record<number, Field>>({
      // あと勝ちになる
      1: {
        id: "f2",
        fieldName: "フィールド2",
        fieldKind: "text",
        fieldIndex: 1,
        options: {},
      },
    });
  });
});
