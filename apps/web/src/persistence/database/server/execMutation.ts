import type { TypedDocumentNode } from "../graphql/document";
import type { Exact } from "./exact";
import { registerUrql } from "../graphql/urql";
import { makeClient } from "./makeClient";

export const execMutation = async <
  M extends {
    __typename?: "mutation_root";
  },
  V extends Exact<Record<string, unknown>>,
>(
  mutation: TypedDocumentNode<M, V>,
  variables: V,
) => {
  const { getClient } = registerUrql(makeClient);
  const { data, error } = await getClient()
    .mutation(mutation, variables)
    .toPromise();

  if (!data) {
    new Error("Failed to execute mutation.");
  }

  return { data, error };
};
