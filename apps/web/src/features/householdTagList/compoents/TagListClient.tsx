"use client";

import { FC } from "react";

import { Button } from "../../../components/ui/button/v5";
import { DataTable } from "../../../components/ui/v4/table";
import { TextInput } from "../../../components/ui/v4/textInput";

type Props = {
  tags: {
    id: string;
    tagName: string;
    colorCode: string;
    count: number;
    newTag?: boolean;
  }[];
};

export const TagListClient: FC<Props> = ({ tags }) => {
  return (
    <div>
      <DataTable
        columns={[
          {
            accessor: "tagName",
            title: "タグ名",
            width: "300px",
            render: ({ tagName }) => {
              if (typeof tagName !== "string") return null;
              return (
                <TextInput
                  label={""}
                  value={tagName}
                  setValue={() => undefined}
                />
              );
            },
          },
          {
            accessor: "colorCode",
            title: "色",
            width: "200px",
            render: ({ colorCode }) => {
              if (typeof colorCode !== "string") return null;
              return (
                <div className={"flex items-center space-x-3"}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: colorCode,
                    }}
                  />
                  <div className={"flex-1"}>
                    <TextInput
                      label={""}
                      value={colorCode}
                      setValue={() => undefined}
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
            accessor: "newTag",
            title: "更新",
            textAlign: "center",
            width: "10%",
            render: ({ newTag }) => {
              if (newTag)
                return (
                  <Button
                    label={"追加"}
                    onClick={() => undefined}
                    type={"add"}
                  />
                );

              return (
                <Button
                  label={"更新"}
                  onClick={() => undefined}
                  type={"modify"}
                />
              );
            },
          },
        ]}
        records={[
          ...tags,
          {
            id: "newTag",
            tagName: "",
            colorCode: "",
            count: 0,
            newTag: true,
          },
        ].map((tag) => ({
          id: tag.id,
          tagName: tag.tagName,
          colorCode: tag.colorCode,
          count: tag.count,
          newTag: !!tag.newTag,
        }))}
      />
    </div>
  );
};
