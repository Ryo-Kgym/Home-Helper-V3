import { cacheExchange, createClient, fetchExchange } from "@v3/graphql/urql";

export const makeClient = () => {
  return createClient({
    url: process.env.ONEFORALL_GRAPHQL_ENDPOINT as string,
    exchanges: [
      cacheExchange({
        keys: {
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          HouseholdAllDetailViewAggregateFields: (data: any) => {
            return data?.aggregate?.max?.accountId;
          },
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          HouseholdAllDetailViewAggregate: (data: any) => {
            return data?.aggregate?.max?.accountId;
          },
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          HouseholdDetailTagAggregate: (data: any) => {
            return data?.aggregate?.count;
          },
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          HouseholdDetailTagAggregateFields: (data: any) => {
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
