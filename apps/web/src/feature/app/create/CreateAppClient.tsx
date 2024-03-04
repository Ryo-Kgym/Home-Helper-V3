"use client";

import type { FieldKind } from "@oneforall/domain/field/type";
import { useState } from "react";
import { Select } from "@components/ui/v4/select";

export const CreateAppClient = () => {
  const [fieldKind, setFieldKind] = useState<FieldKind>("text");

  return (
    <div>
      <div className={"text-3xl"}>CreateAppClient</div>
      <div className={"grid grid-cols-2"}>
        <div>
          <Select
            label={"フィールドの選択"}
            value={fieldKind}
            setValue={setFieldKind}
            data={[
              { label: "Text", value: "text" },
              { label: "SelectBox", value: "selectBox" },
              { label: "MultipleText", value: "multipleText" },
            ]}
          />
        </div>
        <div>Layout</div>
      </div>
    </div>
  );
};
