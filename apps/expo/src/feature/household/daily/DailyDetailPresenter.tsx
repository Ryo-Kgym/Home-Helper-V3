import { Text, View } from "react-native";

import type { IocomeType } from "~/types/iocome-type";
import {
  EditableAccount,
  EditableAmount,
  EditableCategory,
  EditableDate,
  EditableGenre,
  EditableMemo,
} from "~/ui";

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
      <EditableGenre
        className={"text-center text-2xl"}
        value={genre.name}
        setValue={() => undefined}
        defaultValue={genre.id}
        iocomeType={genre.iocomeType}
      />
    </View>
    <View>
      <Text>カテゴリ</Text>
      <EditableCategory
        className={"text-center text-2xl"}
        value={category.name}
        setValue={() => undefined}
        defaultValue={category.id}
        genreId={genre.id}
      />
    </View>
    <View>
      <Text>アカウント</Text>
      <EditableAccount
        className={"text-center text-2xl"}
        value={account.name}
        setValue={() => undefined}
        defaultValue={account.id}
      />
    </View>
    <View>
      <Text>金額</Text>
      <EditableAmount
        className={"text-right text-2xl"}
        value={amount}
        setValue={() => undefined}
        iocomeType={genre.iocomeType}
      />
    </View>
    <View>
      <Text>メモ</Text>
      <EditableMemo value={memo} setValue={() => undefined} />
    </View>
  </View>
);
