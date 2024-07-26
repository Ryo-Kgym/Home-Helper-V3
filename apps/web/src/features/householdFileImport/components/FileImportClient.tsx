"use client";

import { FC } from "react";
import { Select } from "@components/ui/v4/select";
import { FileInput } from "@components/ui/v5/file/FileInput";

import { useBuildTable } from "../client/useBuildTable";
import { useLoadFile } from "../client/useLoadFile";
import { useMessage } from "../client/useMessage";
import { LoadFileInputTable } from "./LoadFileInputTable";

export const FileImportClient: FC = () => {
  const { onChange, loadFile, setLoadFile } = useLoadFile();
  const { buildable, header, body } = useBuildTable(loadFile);
  const { message } = useMessage(loadFile);

  return (
    <div className={"flex"}>
      <div className={"h-full w-96"}>
        <span>設定</span>
        <div>
          <span>エンコード</span>
          <select>
            <option>UTF-8</option>
          </select>
        </div>
        <div>
          <span>列番号の指定</span>
          <div>
            <span>決済日</span>
            <input type={"number"} />
          </div>
          <div>
            <span>金額</span>
            <input type={"number"} />
          </div>
          <div>
            <span>カテゴリ</span>
            <input type={"number"} />
          </div>
        </div>
        <div>
          <Select
            data={[
              {
                label: "日次",
                value: "daily",
              },
              {
                label: "クレジットカード",
                value: "creditCard",
              },
            ]}
            label={"登録先"}
            value={""}
            setValue={() => undefined}
          />
        </div>
      </div>
      <div className={"h-full flex-1"}>
        <FileInput onChange={onChange} />
        <textarea
          className={"h-96 w-full border-2 border-solid p-2"}
          value={loadFile}
          onChange={(e) => {
            setLoadFile(e.target.value);
          }}
        />
        <div className={"text-red-500"}>
          {message.map((m, i) => (
            <div key={i}>{m}</div>
          ))}
        </div>
        <LoadFileInputTable
          visible={!message.length && buildable}
          header={header}
          body={body}
        />
      </div>
    </div>
  );
};
