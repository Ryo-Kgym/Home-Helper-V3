import "server-only";

import { GetDashboardSettingDocument } from "@v3/graphql/household/schema/query/v5/getDashboardSetting.generated";

import { findUser } from "../../../persistence/browser/server/find-user";
import { execQuery } from "../../../persistence/database/server/execQuery";
import type { DashboardFeature } from "../types/dashboardFeature";

export const fetchDashboardSettings = async () => {
  const {
    id: userId,
    group: { id: groupId },
  } = await findUser();

  const { data } = await execQuery(GetDashboardSettingDocument, {
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
