"use server";

import { neon } from "@neondatabase/serverless";

import { SqlResult, SqlResultBase } from "../../types";

export const neonExecuteSql = async <T extends SqlResultBase>(
  endpoint: string,
  query: string,
): Promise<SqlResult<T>> => {
  const sql = neon(endpoint);
  return (await sql(query)) as SqlResult<T>;
};
