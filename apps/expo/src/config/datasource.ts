/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

// @ts-expect-error eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { HOME_HELPER_GRAPHQL_ENDPOINT } from "@env";
import { createClient } from "urql";

export const datasource = createClient({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  url: HOME_HELPER_GRAPHQL_ENDPOINT,
  requestPolicy: "cache-and-network",
});
