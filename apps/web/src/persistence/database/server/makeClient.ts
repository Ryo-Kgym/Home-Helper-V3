import { cacheExchange, createClient, fetchExchange } from "@v3/graphql/urql";

export const makeClient = () => {
  return createClient({
    url: process.env.ONEFORALL_GRAPHQL_ENDPOINT as string,
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
          HouseholdDetailTagAggregate: (data) => {
            // @ts-expect-error - TS doesn't know about the signedAmount field
            return data?.aggregate?.count;
          },
          HouseholdDetailTagAggregateFields: (data) => {
            // @ts-expect-error - TS doesn't know about the signedAmount field
            return data?.aggregate?.count;
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
