"use client";

import type { FieldKind } from "@oneforall/domain/field/type";
import { useState } from "react";
import { Select } from "@components/ui/v4/select";
import { SwitchingField } from "@feature/app/create/SwitchingField";

export const CreateAppClient = () => {
  const [fieldKind, setFieldKind] = useState<FieldKind>("text");
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <div className={"text-3xl"}>CreateAppClient</div>
      <div className={"grid grid-cols-2"}>
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
        <SwitchingField
          label={"フィールドの入力"}
          value={value}
          setValue={setValue}
          fieldKind={fieldKind}
        />
      </div>
    </div>
  );
};
