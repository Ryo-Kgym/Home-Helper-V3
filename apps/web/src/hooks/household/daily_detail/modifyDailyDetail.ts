"use server";

import { UpdateDailyDetailByIdDocument } from "@v3/graphql/household/type";

import { DailyDetail } from "../../../domain/model/household/DailyDetail";
import { execMutation } from "../../../persistence/database/server/execMutation";

export const modifyDailyDetail = async (params: DailyDetail) => {
  const { data } = await execMutation(UpdateDailyDetailByIdDocument, params);

  if (!data.updateDailyDetailByPk) {
    throw new Error("Failed to update daily detail");
  }
};
