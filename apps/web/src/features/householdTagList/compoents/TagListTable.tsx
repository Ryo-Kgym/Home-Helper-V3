import type { FC } from "react";

import { Button } from "../../../components/ui/button/v5";
import { NumberInput } from "../../../components/ui/numberInput/v4/NumberInput";
import { TextInput } from "../../../components/ui/textInput/TextInput";
import { DataTable } from "../../../components/ui/v4/table";
import { errorPopup, successPopup } from "../../../function/successPopup";
import { useNavigation } from "../../../routing/client/useNavigation";
import { useStateSetTag, useStateTagList } from "../hooks/useStateTagList";
import { deleteTag } from "../useServer/deleteTag";
import { modifyTag } from "../useServer/modifyTag";

export const TagListTable: FC = () => {
  const tags = useStateTagList();
  const setTag = useStateSetTag();
  const { refresh } = useNavigation();

  return (
    <DataTable
      columns={[
        {
          accessor: "name",
          title: "タグ名",
          width: "300px",
          render: (tag) => {
            return (
              <TextInput
                label={""}
                value={tag.name}
                setValue={(v) => setTag({ ...tag, name: v })}
              />
            );
          },
        },
        {
          accessor: "colorCode",
          title: "色",
          width: "200px",
          render: (tag) => {
            return (
              <div className={"flex items-center space-x-3"}>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: tag.colorCode,
                  }}
                />
                <div className={"flex-1"}>
                  <TextInput
                    label={""}
                    value={tag.colorCode}
                    setValue={(v) => setTag({ ...tag, colorCode: v })}
                  />
                </div>
              </div>
            );
          },
        },
        {
          accessor: "displayOrder",
          title: "表示順序",
          textAlign: "right",
          width: "10%",
          render: (tag) => {
            return (
              <NumberInput
                label={""}
                value={tag.displayOrder}
                setValue={(v) => setTag({ ...tag, displayOrder: v || 0 })}
              />
            );
          },
        },
        {
          accessor: "count",
          title: "使用件数",
          textAlign: "right",
          width: "10%",
        },
        {
          accessor: "id",
          title: "更新",
          textAlign: "center",
          width: "10%",
          render: (tag) => {
            return (
              <>
                <Button
                  label={"更新"}
                  onClick={async () => {
                    try {
                      await modifyTag(tag);
                      successPopup("更新しました");
                      refresh();
                    } catch (e) {
                      console.error(e);
                      errorPopup("更新に失敗しました");
                    }
                  }}
                  type={"modify"}
                />
                <Button
                  label={"削除"}
                  onClick={async () => {
                    try {
                      await deleteTag(tag);
                      successPopup("削除しました");
                      refresh();
                    } catch (e) {
                      console.error(e);
                      errorPopup("削除に失敗しました");
                    }
                  }}
                  type={"dangerous"}
                  disabled={tag.count > 0}
                />
              </>
            );
          },
        },
      ]}
      records={tags.map((tag) => ({
        id: tag.id,
        name: tag.name,
        colorCode: tag.colorCode,
        displayOrder: tag.displayOrder,
        count: tag.count,
      }))}
    />
  );
};
