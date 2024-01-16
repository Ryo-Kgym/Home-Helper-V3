/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { createClient } from "urql";

import { env } from "~/config/env";

export const datasource = createClient({
  url: env.HOME_HELPER_GRAPHQL_ENDPOINT,
  requestPolicy: "cache-and-network",
});
