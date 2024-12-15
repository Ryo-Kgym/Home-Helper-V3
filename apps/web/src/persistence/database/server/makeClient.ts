import { cacheExchange, createClient, fetchExchange } from "../graphql/urql";

export const makeClient = () => {
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
