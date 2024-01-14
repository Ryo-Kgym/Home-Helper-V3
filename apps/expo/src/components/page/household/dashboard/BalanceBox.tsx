import { Text, View } from "react-native";
import { Link } from "expo-router";
import { useGetAccountBalanceListQuery } from "@/turbo/graphql/household";

import { paths } from "~/app/paths";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";

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
    <Link href={paths.household.account as "/"}>
      <View className={"rounded-2xl border-2 border-gray-400 p-3"}>
        <Text className={"text-xl"}>残高</Text>
        <Text className={"text-right text-2xl"}>
          {totalBalance.toLocaleString() + " 円"}
        </Text>
        <Text>{today.toLocaleString()} 時点</Text>
      </View>
    </Link>
  );
};
