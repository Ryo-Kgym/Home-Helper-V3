import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { useGetAccountBalanceListQuery } from "../../../../../../../packages/graphql/household";
import { BalanceListPresenter } from "./BalanceListPresenter";

export const BalanceListContainer = () => {
  const { groupId } = useSaveGroupId();

  const [{ data }] = useGetAccountBalanceListQuery({
    variables: {
      groupId,
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
  return <BalanceListPresenter accounts={accounts} />;
};
