import type { TypedDocumentNode } from "../graphql/document";
import { registerUrql } from "../graphql/urql";
import type { Exact } from "./exact";
import { makeClient } from "./makeClient";

export const execQuery = async <
  Q extends {
    __typename?: "query_root";
  },
  V extends Exact<Record<string, unknown>>,
>(
  query: TypedDocumentNode<Q, V>,
  variables: V,
) => {
  const { getClient } = registerUrql(makeClient);
  const { data, error } = await getClient().query(query, variables).toPromise();

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error("Failed data fetching.");
  }

  return { data };
};
