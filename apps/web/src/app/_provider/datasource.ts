/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { refocusExchange } from "@urql/exchange-refocus";
import { cacheExchange, createClient, fetchExchange } from "urql";

export const datasource = createClient({
  url: process.env.NEXT_PUBLIC_HOUSEHOLD_GRAPHQL_ENDPOINT!,
  requestPolicy: "cache-and-network",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  exchanges: [refocusExchange(), cacheExchange, fetchExchange],
});
