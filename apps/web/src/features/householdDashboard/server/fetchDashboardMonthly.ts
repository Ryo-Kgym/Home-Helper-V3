"use server";

import { buildParams } from "@features/householdDashboard/server/buildParams";
import { convertToNominal } from "@features/householdDashboard/server/convertToNominal";
import { DashboardComponentProps } from "@features/householdDashboard/types/dashboardFC";
import { findUser } from "@persistence/browser/server/find-user";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetDetailsByCategoryDocument } from "@v3/graphql/household/type";

type Results = {
  income: Nominal;
  outcome: Nominal;
};

export type Nominal = {
  total: number;
  details: {
    id: string;
    name: string;
    amount: number;
  }[];
};

export const fetchDashboardMonthly = async (
  params: DashboardComponentProps,
): Promise<Results> => {
  const { group } = await findUser();
  const { firstDay, lastDay } = buildParams(params);

  const { data: outcomeData } = await fetchQuery(GetDetailsByCategoryDocument, {
    fromDate: firstDay,
    toDate: lastDay,
    groupId: group.id,
    iocomeType: "OUTCOME",
  });

  const outcome = convertToNominal(outcomeData);

  const { data: incomeData } = await fetchQuery(GetDetailsByCategoryDocument, {
    fromDate: firstDay,
    toDate: lastDay,
    groupId: group.id,
    iocomeType: "INCOME",
  });

  const income = convertToNominal(incomeData);

  return {
    income,
    outcome,
  };
};
