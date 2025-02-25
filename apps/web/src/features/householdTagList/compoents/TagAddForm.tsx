import { type FC, useState } from "react";

import { Button } from "../../../components/ui/button/v5";
import { NumberInput } from "../../../components/ui/numberInput/v4/NumberInput";
import { TextInput } from "../../../components/ui/textInput/TextInput";
import { errorPopup, successPopup } from "../../../function/successPopup";
import { useNavigation } from "../../../routing/client/useNavigation";
import type { Tag } from "../types/tag";
import { addTag } from "../useServer/addTag";

export const TagAddForm: FC = () => {
  const [tag, setTag] = useState<Omit<Tag, "id">>({
    name: "",
    colorCode: "",
    displayOrder: 0,
  });
  const { refresh } = useNavigation();

  return (
    <div className={"w-96"}>
      <TextInput
        label={"タグ名"}
        value={tag.name}
        setValue={(v) => setTag((prev) => ({ ...prev, name: v }))}
      />
      <div className={"flex items-center space-x-3"}>
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: tag.colorCode,
          }}
        />
        <div className={"flex-1"}>
          <TextInput
            label={"カラーコード"}
            value={tag.colorCode}
            setValue={(v) => setTag((prev) => ({ ...prev, colorCode: v }))}
          />
        </div>
      </div>
      <NumberInput
        label={"表示順"}
        value={tag.displayOrder}
        setValue={(v) => setTag((prev) => ({ ...prev, displayOrder: v || 0 }))}
      />
      <Button
        label={"追加"}
        onClick={async () => {
          try {
            await addTag(tag);
            successPopup("タグを追加しました");
            refresh();
          } catch (e) {
            console.error(e);
            errorPopup("タグの追加に失敗しました");
          }
        }}
        type={"add"}
      />
    </div>
  );
};
