import * as mapSqlRecordsToAppRecords from "@oneforall/domain/convert/mapSqlRecordsToAppRecords";
import { App } from "@oneforall/domain/schema/appSchema";
import * as executeSql from "@oneforall/domain/sql/execution";
import * as parseToRecords from "@v3/graphql/public/convert/parseToRecords";

import * as getLookupRecordsMod from "~/server/lookupRecords";
import { switchRecords } from "./switchRecords";

jest.mock("@oneforall/domain/sql/execution");
jest.mock("~/server/lookupRecords");
jest.mock("@oneforall/domain/convert/mapSqlRecordsToAppRecords");
jest.mock("@v3/graphql/public/convert/parseToRecords");

describe("switchRecords", () => {
  const executeSqlSpy = jest.spyOn(executeSql, "executeSql");
  const getLookupRecordsSpy = jest.spyOn(
    getLookupRecordsMod,
    "getLookupRecords",
  );
  const mapSqlRecordsToAppRecordsSpy = jest.spyOn(
    mapSqlRecordsToAppRecords,
    "mapSqlRecordsToAppRecords",
  );
  const parseToRecordsSpy = jest.spyOn(parseToRecords, "parseToRecords");

  const app: App = {
    id: "a1",
    name: "app1",
    fields: {
      f1: {
        id: "f1",
        fieldKind: "text",
        fieldIndex: 1,
        fieldName: "field1",
        options: {},
      },
    },
  };
  const linkDatabase = {
    database: "neon",
    connection: {
      endpoint: "http://localhost:8080",
    },
    sql: "SELECT * FROM table1",
    parameters: {},
    fieldColumnMaps: {
      f1: {
        columnName: "column1",
      },
    },
  };
  const linkDatabaseEtc = {
    __typename: "LinkDatabase" as const,
    id: "ld1",
    ...linkDatabase,
  };
  const sqlRecord = [
    {
      a: "A1",
      b: "B1",
    },
    {
      a: "A2",
      b: "B2",
    },
  ];
  const lookupRecords = {
    0: {
      0: "a",
      1: "b",
    },
  };

  beforeEach(() => {
    executeSqlSpy.mockClear();
    getLookupRecordsSpy.mockClear();
    mapSqlRecordsToAppRecordsSpy.mockClear();
    parseToRecordsSpy.mockClear();
  });

  it("linkDatabase のparseが成功した場合、当該の関数が呼び出されること", async () => {
    executeSqlSpy.mockResolvedValue(sqlRecord);
    getLookupRecordsSpy.mockResolvedValue(lookupRecords);

    await switchRecords(app, {
      linkDatabase: linkDatabaseEtc,
      records: [],
    });

    expect(executeSqlSpy).toHaveBeenCalledWith(linkDatabase);
    expect(getLookupRecordsSpy).toHaveBeenCalledWith(app);
    expect(mapSqlRecordsToAppRecordsSpy).toHaveBeenCalledWith(
      sqlRecord,
      app.fields,
      linkDatabase.fieldColumnMaps,
      lookupRecords,
    );
    expect(parseToRecordsSpy).not.toHaveBeenCalled();
  });

  it("linkDatabase のparseが失敗した場合、records のparseが呼び出されること", async () => {
    await switchRecords(app, {
      linkDatabase: null,
      records: [
        {
          __typename: "Record" as const,
          id: "r1",
          index: 0,
          columns: {},
        },
      ],
    });

    expect(executeSqlSpy).not.toHaveBeenCalled();
    expect(getLookupRecordsSpy).not.toHaveBeenCalled();
    expect(mapSqlRecordsToAppRecordsSpy).not.toHaveBeenCalled();
    expect(parseToRecordsSpy).toHaveBeenCalledWith([
      {
        __typename: "Record",
        id: "r1",
        index: 0,
        columns: {},
      },
    ]);
  });
});
