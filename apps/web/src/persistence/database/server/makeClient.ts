import { cacheExchange, createClient, fetchExchange } from "../graphql/urql";

export const makeClient = () => {
  return createClient({
    url: process.env.ONEFORALL_GRAPHQL_ENDPOINT!,
    exchanges: [
      cacheExchange({
        keys: {
          HouseholdAllDetailViewAggregateFields: (data) => {
            // @ts-expect-error - TS doesn't know about the signedAmount field
            return data?.aggregate?.max?.accountId;
          },
          HouseholdAllDetailViewAggregate: (data) => {
            // @ts-expect-error - TS doesn't know about the signedAmount field
            return data?.aggregate?.max?.accountId;
          },
        },
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
