import type { ImportFileSettings } from "@feature/app/schema";
import type { ReactNode } from "react";
import { useState } from "react";
import { Button } from "@components/ui/v4/button";
import { NumberInput } from "@components/ui/v4/textInput";
import { EncodingSelect } from "@feature/record/import/EncodingSelect";
import { EncodingTypeSelect } from "@feature/record/import/EncodingTypeSelect";
import { LineBreakCodeSelect } from "@feature/record/import/LineBreakCodeSelect";
import { QuotationSelect } from "@feature/record/import/QuotationSelect";
import { SplitterSelect } from "@feature/record/import/SplitterSelect";
import { useInsertImportFileSettingMutation } from "@v3/graphql/public";

export const SetImportFileSetting = ({
  appId,
  importFileSettings: defaultSettings,
  setAfterHandler,
}: {
  appId: string;
  importFileSettings: ImportFileSettings;
  setAfterHandler: () => void;
}) => {
  const [settings, setSettings] = useState<ImportFileSettings>(
    structuredClone(defaultSettings),
  );

  const [, mut] = useInsertImportFileSettingMutation();

  const setHandler = async () => {
    try {
      const { error } = await mut({
        appId,
        settings,
      });
      if (error) {
        console.error(error);
      }
      alert("設定しました");
      setAfterHandler();
    } catch (e) {
      console.error(e);
      alert("設定に失敗した。");
    }
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
      <Section title={"ヘッダー行数"}>
        <NumberInput
          value={settings.headerRows}
          setValue={(value) =>
            setSettings({ ...settings, headerRows: value ? value : 0 })
          }
          label={""}
        />
      </Section>
      <Section title={"フッター"}>
        <NumberInput
          value={settings.footerRows}
          setValue={(value) =>
            setSettings({ ...settings, footerRows: value ? value : 0 })
          }
          label={""}
        />
      </Section>
      <Section title={"引用符"}>
        <QuotationSelect
          value={settings.quotation}
          setValue={(value) => setSettings({ ...settings, quotation: value })}
        />
      </Section>
      <Section title={"区切り文字"}>
        <SplitterSelect
          value={settings.splitter}
          setValue={(value) => setSettings({ ...settings, splitter: value })}
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
