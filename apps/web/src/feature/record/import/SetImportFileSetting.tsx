import type { ImportFileSettings } from "@feature/app/schema";
import type { ReactNode } from "react";
import { useState } from "react";
import { Button } from "@components/ui/v4/button";
import { EncodingSelect } from "@feature/record/import/EncodingSelect";
import { EncodingTypeSelect } from "@feature/record/import/EncodingTypeSelect";
import { LineBreakCodeSelect } from "@feature/record/import/LineBreakCodeSelect";
import { QuotationSelect } from "@feature/record/import/QuotationSelect";

export const SetImportFileSetting = ({
  appId,
  importFileSettings: defaultSettings,
}: {
  appId: string;
  importFileSettings: ImportFileSettings;
}) => {
  const [settings, setSettings] = useState<ImportFileSettings>(defaultSettings);

  const setHandler = () => {
    appId;
  };

  return (
    <div className={"space-y-5"}>
      <div>ファイル取込設定</div>
      <Section title={"変換前エンコード"}>
        <EncodingSelect
          value={settings.encodingFrom}
          setValue={(value) =>
            setSettings({ ...settings, encodingFrom: value })
          }
        />
      </Section>
      <Section title={"変換後エンコード"}>
        <EncodingSelect
          value={settings.encodingTo}
          setValue={(value) => setSettings({ ...settings, encodingTo: value })}
        />
      </Section>
      <Section title={"タイプ"}>
        <EncodingTypeSelect
          value={settings.encodingType}
          setValue={(value) =>
            setSettings({ ...settings, encodingType: value })
          }
        />
      </Section>
      <Section title={"改行コード"}>
        <LineBreakCodeSelect
          value={settings.splitSeparator}
          setValue={(value) =>
            setSettings({ ...settings, splitSeparator: value })
          }
        />
      </Section>
      <Section title={"引用符"}>
        <QuotationSelect
          value={settings.quotation}
          setValue={(value) => setSettings({ ...settings, quotation: value })}
        />
      </Section>

      <Button label={"設定"} clickHandler={setHandler} type={"modify"} />
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div>
      <div>{title}</div>
      {children}
    </div>
  );
};
