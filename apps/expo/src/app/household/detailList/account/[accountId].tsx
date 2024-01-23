import { View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import { DetailListByAccount } from "~/feature/household/detailList";
import { useGetAccountByIdQuery } from "../../../../../../../packages/graphql/src/graphql/hasura/generated/hasuraGraphql";

const Page = () => {
  const { accountId } = useLocalSearchParams();
  const [{ data }] = useGetAccountByIdQuery({
    variables: {
      accountId: accountId as string,
    },
  });
  return (
    <View>
      <Stack.Screen options={{ title: data?.account?.name ?? "" }} />
      <View className={"w-full"}>
        <DetailListByAccount accountId={accountId as string} />
      </View>
    </View>
  );
};

export default Page;
