import "server-only";

import { GetDashboardSettingDocument } from "@v3/graphql/household/type";

import { findUser } from "../../../persistence/browser/server/find-user";
import { fetchQuery } from "../../../persistence/database/server/fetchQuery";
import { DashboardFeature } from "../types/dashboardFeature";

export const fetchDashboardSettings = async () => {
  const {
    id: userId,
    group: { id: groupId },
  } = await findUser();

  const { data } = await fetchQuery(GetDashboardSettingDocument, {
    userId,
    groupId,
  });

  return data.setting.map((s) => ({
    id: s.id,
    feature: s.feature as DashboardFeature,
    order: s.order,
    args: s.args,
  }));
};
