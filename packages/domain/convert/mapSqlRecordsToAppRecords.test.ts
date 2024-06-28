import { Fields } from "../schema/appSchema";
import { FieldColumnMaps } from "../schema/linkDatabase/fieldColumnMapsSchema";
import { Records } from "../schema/recordSchema";
import { SqlResult } from "../sql/types";
import { mapSqlRecordsToAppRecords } from "./mapSqlRecordsToAppRecords";

describe("mapSqlRecordsToAppRecords", () => {
  const sqlRecords: SqlResult<{
    id: string;
    price: number;
    memo: string;
    genre_id: string;
  }> = [
    {
      id: "id1",
      price: 1000,
      memo: "利子・利息",
      genre_id: "1",
    },
    {
      id: "id2",
      memo: "業務端末",
      price: 40000,
      genre_id: "2",
    },
    {
      id: "id3",
      memo: "サブスク",
      price: 5000,
      genre_id: "3",
    },
  ];

  const fields: Fields = {
    f1: {
      id: "f1",
      fieldName: "ID",
      fieldKind: "text",
      fieldIndex: 0,
      options: {},
    },
    f2: {
      id: "f2",
      fieldName: "金額",
      fieldKind: "numeric",
      fieldIndex: 1,
      options: { thousandsSeparatorPosition: 3 },
    },
    f3: {
      id: "f3",
      fieldName: "メモ",
      fieldKind: "multipleText",
      fieldIndex: 2,
      options: {},
    },
    f4: {
      id: "f4",
      fieldName: "ジャンル",
      fieldKind: "lookup",
      fieldIndex: 3,
      options: {
        appId: "genreApp",
        selectFieldId: "gf2",
        saveFieldId: "gf1",
        sortFieldId: "f1",
        sortDirection: "asc",
        filters: {},
      },
    },
  };

  const fieldColumnMaps: FieldColumnMaps = {
    f1: {
      columnName: "id",
    },
    f2: {
      columnName: "price",
    },
    f3: {
      columnName: "memo",
    },
    f4: {
      columnName: "genre_id",
    },
  };

  const lookupRecords = {
    f4: {
      "1": "利子・利息",
      "2": "業務端末",
      "3": "サブスク",
    },
  };

  it("外部テーブルのレコードをFieldSchemaにマッピングする", () => {
    const actual = mapSqlRecordsToAppRecords(
      sqlRecords,
      fields,
      fieldColumnMaps,
      lookupRecords,
    );

    expect(actual).toEqual<Records>({
      "0": {
        recordId: "0",
        isEditing: false,
        columns: {
          f1: {
            fieldKind: "text",
            value: "id1",
            options: undefined,
          },
          f2: {
            fieldKind: "numeric",
            value: "1000",
            options: undefined,
          },
          f3: {
            fieldKind: "multipleText",
            value: "利子・利息",
            options: undefined,
          },
          f4: {
            fieldKind: "lookup",
            value: "1",
            options: {
              label: "利子・利息",
            },
          },
        },
      },
      "1": {
        recordId: "1",
        isEditing: false,
        columns: {
          f1: {
            fieldKind: "text",
            value: "id2",
            options: undefined,
          },
          f2: {
            fieldKind: "numeric",
            value: "40000",
            options: undefined,
          },
          f3: {
            fieldKind: "multipleText",
            value: "業務端末",
            options: undefined,
          },
          f4: {
            fieldKind: "lookup",
            value: "2",
            options: {
              label: "業務端末",
            },
          },
        },
      },
      "2": {
        recordId: "2",
        isEditing: false,
        columns: {
          f1: {
            fieldKind: "text",
            value: "id3",
            options: undefined,
          },
          f2: {
            fieldKind: "numeric",
            value: "5000",
            options: undefined,
          },
          f3: {
            fieldKind: "multipleText",
            value: "サブスク",
            options: undefined,
          },
          f4: {
            fieldKind: "lookup",
            value: "3",
            options: {
              label: "サブスク",
            },
          },
        },
      },
    });
  });

  it("マッピングに失敗した場合、空の文字が設定される", () => {
    const actual = mapSqlRecordsToAppRecords(
      sqlRecords,
      fields,
      {
        f1: {
          columnName: "id",
        },
      },
      lookupRecords,
    );

    expect(actual).toEqual<Records>({
      "0": {
        recordId: "0",
        isEditing: false,
        columns: {
          f1: {
            fieldKind: "text",
            value: "id1",
            options: undefined,
          },
          f2: {
            fieldKind: "numeric",
            value: "",
            options: undefined,
          },
          f3: {
            fieldKind: "multipleText",
            value: "",
            options: undefined,
          },
          f4: {
            fieldKind: "lookup",
            value: "",
            options: {
              label: "",
            },
          },
        },
      },
      "1": {
        recordId: "1",
        isEditing: false,
        columns: {
          f1: {
            fieldKind: "text",
            value: "id2",
            options: undefined,
          },
          f2: {
            fieldKind: "numeric",
            value: "",
            options: undefined,
          },
          f3: {
            fieldKind: "multipleText",
            value: "",
            options: undefined,
          },
          f4: {
            fieldKind: "lookup",
            value: "",
            options: {
              label: "",
            },
          },
        },
      },
      "2": {
        recordId: "2",
        isEditing: false,
        columns: {
          f1: {
            fieldKind: "text",
            value: "id3",
            options: undefined,
          },
          f2: {
            fieldKind: "numeric",
            value: "",
            options: undefined,
          },
          f3: {
            fieldKind: "multipleText",
            value: "",
            options: undefined,
          },
          f4: {
            fieldKind: "lookup",
            value: "",
            options: {
              label: "",
            },
          },
        },
      },
    });
  });
});
