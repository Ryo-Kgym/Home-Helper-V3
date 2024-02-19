import { useState } from "react";
import { Text, View } from "react-native";

import type { FavoriteFilterArgValueInputComponent } from "../FavoriteFilterArgValueInput";
import type { IocomeType } from "~/types/iocome-type";
import { EditableCategory, EditableGenre, EditableIocomeType } from "~/ui";

export const CategoryIdInput: FavoriteFilterArgValueInputComponent = ({
  value,
  setValue,
}) => {
  const [iocomeType, setIocomeType] = useState<IocomeType>("INCOME");
  const [genreId, setGenreId] = useState<string>("");

  return (
    <View className={"gap-3"}>
      <View>
        <Text>タイプ</Text>
        <EditableIocomeType value={iocomeType} setValue={setIocomeType} />
      </View>
      <View>
        <Text>ジャンル</Text>
        <EditableGenre
          value={genreId}
          setValue={setGenreId}
          iocomeType={iocomeType}
        />
      </View>
      <View>
        <Text>カテゴリ</Text>
        <EditableCategory value={value} setValue={setValue} genreId={genreId} />
      </View>
    </View>
  );
};
