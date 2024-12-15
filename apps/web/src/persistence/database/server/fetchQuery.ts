import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { createClient, fetchExchange } from "@urql/core";
import { cacheExchange } from "@urql/exchange-graphcache";
import { registerUrql } from "@urql/next/rsc";

const makeClient = () => {
  return createClient({
    url: process.env.ONEFORALL_GRAPHQL_ENDPOINT!,
    exchanges: [
      cacheExchange({
        updates: {
          Mutation: {},
        },
      }),
      fetchExchange,
    ],
    fetchOptions: {
      cache: "no-store",
    },
  });
};

type Exact<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K];
};

/**
 * @deprecated {@link execQuery} を使用してください。
 */
export const fetchQuery = async <
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

  if (!data) {
    new Error("Failed data fetching.");
  }

  return { data: data!, error };
};
