import { z } from "zod";

import { DashboardComponentProps } from "../types/dashboardFC";

export const buildParams = (
  params: Pick<DashboardComponentProps, "dashboardSettingArgs"> & {
    targetMonth?: Date;
  },
) => {
  const month = monthSchema.parse(
    Number(
      params.dashboardSettingArgs.find((arg) => arg.type === "month")?.value,
    ),
  );

  const targetMonth = params.targetMonth ?? new Date();
  targetMonth.setMonth(targetMonth.getMonth() + month);

  const firstDay = new Date(
    targetMonth.getFullYear(),
    targetMonth.getMonth(),
    1,
    9,
  );
  const lastDay = new Date(
    targetMonth.getFullYear(),
    targetMonth.getMonth() + 1,
    0,
    9,
  );

  return {
    firstDay,
    lastDay,
  };
};

const monthSchema = z.number();
