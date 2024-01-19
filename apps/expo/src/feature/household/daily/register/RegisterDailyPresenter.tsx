import { Button, Text, View } from "react-native";

import type { IocomeType } from "~/types/iocome-type";
import {
  EditableAccount,
  EditableAmount,
  EditableCategory,
  EditableDate,
  EditableGenre,
  EditableIocomeType,
  EditableMemo,
} from "~/ui";

type FieldType<T> = {
  value: T;
  setValue: (value: T) => void;
  default: T;
};

export const RegisterDailyPresenter = ({
  date,
  iocomeType,
  genre,
  category,
  amount,
  account,
  memo,
  resetHandler,
  updateHandler,
}: {
  id: string;
  date: FieldType<Date | undefined>;
  iocomeType: FieldType<IocomeType>;
  genre: FieldType<string>;
  category: FieldType<string>;
  account: FieldType<string>;
  amount: FieldType<number>;
  memo: FieldType<string | null>;
  resetHandler: () => void;
  updateHandler: () => void;
}) => (
  <View className={"gap-3"}>
    <View>
      <Text>日付</Text>
      <EditableDate
        value={date.value}
        setValue={date.setValue}
        loadingValue={"-"}
      />
    </View>
    <View>
      <Text>タイプ</Text>
      <EditableIocomeType
        value={iocomeType.value}
        setValue={iocomeType.setValue}
        defaultValue={iocomeType.default}
      />
    </View>
    <View>
      <Text>ジャンル</Text>
      <EditableGenre
        value={genre.value}
        setValue={genre.setValue}
        defaultValue={genre.default}
        iocomeType={iocomeType.value}
      />
    </View>
    <View>
      <Text>カテゴリ</Text>
      <EditableCategory
        value={category.value}
        setValue={category.setValue}
        defaultValue={category.default}
        genreId={genre.value}
      />
    </View>
    <View>
      <Text>アカウント</Text>
      <EditableAccount
        value={account.value}
        setValue={account.setValue}
        defaultValue={account.default}
      />
    </View>
    <View>
      <Text>金額</Text>
      <EditableAmount
        value={amount.value}
        setValue={amount.setValue}
        iocomeType={iocomeType.value}
        defaultValue={amount.default}
      />
    </View>
    <View>
      <Text>メモ</Text>
      <EditableMemo
        value={memo.value}
        setValue={memo.setValue}
        defaultValue={memo.default ?? undefined}
      />
    </View>
    <View className={"flex-row justify-between"}>
      <View className={"w-1/2"}>
        <Button title={"登録"} onPress={updateHandler} />
      </View>
      <View className={"w-1/2"}>
        <Button title={"リセット"} onPress={resetHandler} />
      </View>
    </View>
  </View>
);
