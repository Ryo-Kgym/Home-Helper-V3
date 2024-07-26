import { useEffect, useState } from "react";

export const useMessage = (loadFile: string) => {
  const [message, setMessage] = useState<string[]>([]);

  useEffect(() => {
    const separator = "\n" || "\r\n" || "\r";
    const rows = loadFile.split(separator);
    const headerColumns = rows[0]?.split(",").length ?? 0;

    setMessage(
      rows
        .filter((r) => r.split(",").length !== headerColumns)
        .map(
          (r, i) =>
            `行${i + 1}の列数が不正です。${r.split(",").length} !== ${headerColumns}\r`,
        ),
    );
  }, [loadFile]);

  return { message };
};
