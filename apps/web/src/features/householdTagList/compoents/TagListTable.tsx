import { FC } from "react";

import { Button } from "../../../components/ui/button/v5";
import { DataTable } from "../../../components/ui/v4/table";
import { TextInput } from "../../../components/ui/v4/textInput";
import { errorPopup, successPopup } from "../../../function/successPopup";
import { useStateSetTag, useStateTagList } from "../hooks/useStateTagList";
import { modifyTag } from "../useServer/modifyTag";

type Props = {
  // empty
};
export const TagListTable: FC<Props> = () => {
  const tags = useStateTagList();
  const setTag = useStateSetTag();

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
              <Button
                label={"更新"}
                onClick={async () => {
                  try {
                    await modifyTag(tag);
                    successPopup("更新しました");
                  } catch (e) {
                    console.error(e);
                    errorPopup("更新に失敗しました");
                  }
                }}
                type={"modify"}
              />
            );
          },
        },
      ]}
      records={tags.map((tag) => ({
        id: tag.id,
        name: tag.name,
        colorCode: tag.colorCode,
        count: tag.count,
      }))}
    />
  );
};
