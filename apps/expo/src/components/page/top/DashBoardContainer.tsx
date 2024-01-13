import { useGetAccountBalanceListQuery } from "@/turbo/graphql/household";

import { mock } from "~/config/mock";
import { DashBoardPresenter } from "./DashBoardPresenter";

export const DashBoardContainer = () => {
  const [{ data }] = useGetAccountBalanceListQuery({
    variables: {
      groupId: mock.groupId,
      fromDate: "2019-01-01",
      toDate: "2024-12-31",
    },
  });
  const accounts =
    data?.account.map((account) => ({
      id: account.id,
      name: account.accountName,
      balance:
        (account.allDetailViewsAggregate?.aggregate?.sum
          ?.signedAmount as number) ?? 0,
    })) ?? [];
  return <DashBoardPresenter accounts={accounts} />;
};
