import { createClient, fetchExchange } from "@urql/core";
import { cacheExchange } from "@urql/exchange-graphcache";
import { registerUrql } from "@urql/next/rsc";

import type { TypedDocumentNode } from "@graphql-typed-document-node/core";

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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const { getClient } = registerUrql(makeClient);

type Exact<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K];
};

export const fetchQuery = async <
  Q extends {
    __typename?: "query_root";
  },
  V extends Exact<Record<string, unknown>>,
>(
  query: TypedDocumentNode<Q, V>,
  variables: V,
) => {
  const { data, error } = await getClient().query(query, variables).toPromise();

  if (!data) {
    new Error("Failed data fetching.");
  }

  return { data: data!, error };
};
