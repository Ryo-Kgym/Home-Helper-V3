import { Text, View } from "react-native";

import { Amount } from "./Amount";

export const Total = ({
  income,
  outcome,
}: {
  income: number;
  outcome: number;
}) => (
  <View className={"flex flex-row items-center justify-between px-10 py-2"}>
    <View>
      <Text>収入</Text>
      <Amount amount={income} iocomeType={"INCOME"} />
    </View>
    <View>
      <Text>支出</Text>
      <Amount amount={outcome} iocomeType={"OUTCOME"} />
    </View>
    <View>
      <Text>差分</Text>
      <Amount
        amount={Math.abs(income - outcome)}
        iocomeType={income > outcome ? "INCOME" : "OUTCOME"}
      />
    </View>
  </View>
);
