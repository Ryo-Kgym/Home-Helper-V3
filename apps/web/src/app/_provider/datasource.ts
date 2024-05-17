/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { createClient, fetchExchange } from "urql";

export const datasource = createClient({
  url: process.env.NEXT_PUBLIC_HOUSEHOLD_GRAPHQL_ENDPOINT!,
  requestPolicy: "cache-and-network",
  exchanges: [fetchExchange],
});
