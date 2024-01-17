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

type FieldType<T> = {
  value: T;
  setValue: (value: T) => void;
  default: T;
};

export const DailyDetailPresenter = ({
  date,
  iocomeType,
  genre,
  category,
  amount,
  account,
  memo,
}: {
  id: string;
  date: FieldType<Date | undefined>;
  iocomeType: FieldType<IocomeType>;
  genre: FieldType<string>;
  category: FieldType<string>;
  account: FieldType<string>;
  amount: FieldType<number>;
  memo: FieldType<string | null>;
}) => (
  <View className={"gap-3"}>
    <View>
      <Text>日付</Text>
      <EditableDate
        value={date.value}
        setValue={date.setValue}
        className={"text-center text-2xl"}
        defaultValue={"-"}
      />
    </View>
    <View>
      <Text>ジャンル</Text>
      <EditableGenre
        className={"text-center text-2xl"}
        value={genre.value}
        setValue={genre.setValue}
        defaultValue={genre.default}
        iocomeType={iocomeType.value}
      />
    </View>
    <View>
      <Text>カテゴリ</Text>
      <EditableCategory
        className={"text-center text-2xl"}
        value={category.value}
        setValue={category.setValue}
        defaultValue={category.default}
        genreId={genre.value}
      />
    </View>
    <View>
      <Text>アカウント</Text>
      <EditableAccount
        className={"text-center text-2xl"}
        value={account.value}
        setValue={account.setValue}
        defaultValue={account.default}
      />
    </View>
    <View>
      <Text>金額</Text>
      <EditableAmount
        className={"text-right text-2xl"}
        value={amount.value}
        setValue={amount.setValue}
        iocomeType={iocomeType.value}
      />
    </View>
    <View>
      <Text>メモ</Text>
      <EditableMemo
        className={"text-xl"}
        value={memo.value}
        setValue={memo.setValue}
        defaultValue={memo.default ?? undefined}
      />
    </View>
  </View>
);
