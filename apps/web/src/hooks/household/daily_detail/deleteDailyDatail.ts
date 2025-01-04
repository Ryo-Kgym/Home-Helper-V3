"use server";

import { DeleteDailyDetailBySerialNoDocument } from "@v3/graphql/household/schema/mutation/delete/DeleteDailyDetailBySerialNo.generated";

import { execMutation } from "../../../persistence/database/server/execMutation";

export const deleteDailyDetail = async ({ id }: { id: string }) => {
  await execMutation(DeleteDailyDetailBySerialNoDocument, {
    id,
  });
};
