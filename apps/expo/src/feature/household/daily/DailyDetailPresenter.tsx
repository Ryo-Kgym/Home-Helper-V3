import { Text, View } from "react-native";

import type { IocomeType } from "~/types/iocome-type";
import { Amount, EditableDate } from "~/ui";

export const DailyDetailPresenter = ({
  date,
  genre,
  category,
  amount,
  account,
  memo,
}: {
  id: string;
  date?: Date;
  genre: { id: string; name: string; iocomeType: IocomeType };
  category: { id: string; name: string };
  account: { id: string; name: string };
  amount: number;
  memo: string;
}) => (
  <View className={"gap-3"}>
    <View>
      <Text>日付</Text>
      <EditableDate
        value={date}
        setValue={() => undefined}
        className={"text-center text-2xl"}
        defaultValue={"-"}
      />
    </View>
    <View>
      <Text>ジャンル</Text>
      <Text className={"text-center text-2xl"}>{genre.name}</Text>
    </View>
    <View>
      <Text>カテゴリ</Text>
      <Text className={"text-center text-2xl"}>{category.name}</Text>
    </View>
    <View>
      <Text>アカウント</Text>
      <Text className={"text-center text-2xl"}>{account.name}</Text>
    </View>
    <View>
      <Text>金額</Text>
      <Amount
        className={"text-right text-2xl"}
        amount={amount}
        iocomeType={genre.iocomeType}
      />
    </View>
    <View>
      <Text>メモ</Text>
      <Text className={"text-xl"}>{memo}</Text>
    </View>
  </View>
);
