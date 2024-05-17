/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { createClient, fetchExchange } from "urql";

export const datasource = createClient({
  url: process.env.EXPO_PUBLIC_API_URL ?? "",
  requestPolicy: "cache-and-network",
  exchanges: [fetchExchange],
});
