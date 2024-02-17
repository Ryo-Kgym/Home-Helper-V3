import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import {
  EditableAccount,
  EditableAmount,
  EditableDate,
  EditableMemo,
} from "~/ui";

type FieldType<T> = {
  value: T;
  setValue: (value: T) => void;
};

export const RegisterTransferPresenter = ({
  date,
  amount,
  account,
  memo,
  resetHandler,
  registerHandler,
}: {
  date: FieldType<Date | undefined>;
  account: FieldType<string>;
  amount: FieldType<number | null>;
  memo: FieldType<string | null>;
  resetHandler: () => void;
  registerHandler: () => void;
}) => (
  <KeyboardAvoidingView
    behavior={"position"}
    contentContainerStyle={{}}
    keyboardVerticalOffset={100}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <Text>アカウント</Text>
          <EditableAccount value={account.value} setValue={account.setValue} />
        </View>
        <View>
          <Text>金額</Text>
          <EditableAmount value={amount.value} setValue={amount.setValue} />
        </View>
        <View>
          <Text>メモ</Text>
          <EditableMemo value={memo.value} setValue={memo.setValue} />
        </View>
        <View className={"h-16 flex-row justify-between"}>
          <View className={"w-1/2"}>
            <Button title={"登録"} onPress={registerHandler} />
          </View>
          <View className={"w-1/2"}>
            <Button title={"リセット"} onPress={resetHandler} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);
