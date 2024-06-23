"use server";

import { LinkDatabase } from "../../schema/linkDatabase/linkDatabaseSchema";
import { SqlResult, SqlResultBase } from "../types";
import { neonExecuteSql } from "./neondb";

export const executeSql = <T extends SqlResultBase>(
  linkDatabase: LinkDatabase,
): Promise<SqlResult<T>> => {
  switch (linkDatabase.database) {
    case "neon": {
      return neonExecuteSql<T>(
        linkDatabase.connection.endpoint,
        linkDatabase.sql,
      );
    }
  }
  throw new Error("Invalid database");
};
