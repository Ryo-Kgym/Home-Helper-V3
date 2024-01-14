import { Text, View } from "react-native";
import { useGetAccountBalanceListQuery } from "@/turbo/graphql/household";

import { paths } from "~/app/paths";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { DashboardFrame } from "./DashboardFrame";

export const BalanceBox = () => {
  const today = new Date();
  const { groupId } = useSaveGroupId();

  const [{ data }] = useGetAccountBalanceListQuery({
    variables: {
      groupId,
      fromDate: "2019-01-01",
      toDate: today.toISOString().slice(0, 10),
    },
  });

  const totalBalance =
    data?.account.reduce((acc, account) => {
      const balance =
        (account.allDetailViewsAggregate?.aggregate?.sum
          ?.signedAmount as number) ?? 0;
      return acc + balance;
    }, 0) ?? 0;

  return (
    <DashboardFrame label={"残高"} href={paths.household.account}>
      <View className={""}>
        <Text className={"text-right text-3xl"}>
          {totalBalance.toLocaleString()}
        </Text>
        <Text>{today.toLocaleString()} 時点</Text>
      </View>
    </DashboardFrame>
  );
};
