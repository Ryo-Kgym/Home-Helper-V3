"use client";

import type { App, Records } from "@feature/app/schema";
import { useState } from "react";
import { Table } from "@components/ui/v4/table";

export const ImportPreview = ({ app }: { app: App }) => {
  const [previewRecords] = useState<Records>(mockRecords);

  return (
    <div>
      <div>プレビュー</div>
      <Table>
        <Table.Header
          headerItems={Object.values(app.fields).map((f) => ({
            name: f.fieldName,
          }))}
        />
        <Table.Body
          data={Object.entries(previewRecords)}
          renderItem={([k, v]) => (
            <>
              {Object.entries(v.columns).map(([f, column]) => (
                <Table.BodyTd key={k + f}>{column.value}</Table.BodyTd>
              ))}
            </>
          )}
        />
      </Table>
    </div>
  );
};

const mockRecords: Records = {
  "1": {
    recordId: "1",
    isEditing: false,
    columns: {
      "1": {
        fieldKind: "text",
        value: "2024-01-01",
      },
      "2": {
        fieldKind: "text",
        value: "Amazon",
      },
      "3": {
        fieldKind: "text",
        value: "1234",
      },
      "4": {
        fieldKind: "text",
        value: "",
      },
      "5": {
        fieldKind: "text",
        value: "",
      },
      "6": {
        fieldKind: "text",
        value: "",
      },
      "7": {
        fieldKind: "multipleText",
        value: "memomemo",
      },
    },
  },
  "2": {
    recordId: "2",
    isEditing: false,
    columns: {
      "1": {
        fieldKind: "text",
        value: "2024-01-01",
      },
      "2": {
        fieldKind: "text",
        value: "Amazon",
      },
      "3": {
        fieldKind: "text",
        value: "1234",
      },
      "4": {
        fieldKind: "text",
        value: "",
      },
      "5": {
        fieldKind: "text",
        value: "",
      },
      "6": {
        fieldKind: "text",
        value: "",
      },
      "7": {
        fieldKind: "multipleText",
        value: "memomemo",
      },
    },
  },
};
