import type { ImportFileSettings } from "@feature/app/schema";
import type { ReactNode } from "react";
import { Button } from "@components/ui/v4/button";
import { notify } from "@components/ui/v4/notify/notify";
import { NumberInput } from "@components/ui/v4/textInput";
import { importFileSettingsSchema } from "@feature/app/schema";
import { EncodingSelect } from "@feature/record/import/EncodingSelect";
import { EncodingTypeSelect } from "@feature/record/import/EncodingTypeSelect";
import { LineBreakCodeSelect } from "@feature/record/import/LineBreakCodeSelect";
import { QuotationSelect } from "@feature/record/import/QuotationSelect";
import { SplitterSelect } from "@feature/record/import/SplitterSelect";
import { useInsertImportFileSettingMutation } from "@v3/graphql/public";

export const SetImportFileSetting = ({
  appId,
  importFileSettings: settings,
  setImportFileSettings,
  setAfterHandler,
}: {
  appId: string;
  importFileSettings: ImportFileSettings;
  setImportFileSettings: (settings: ImportFileSettings) => void;
  setAfterHandler: () => void;
}) => {
  const [, mut] = useInsertImportFileSettingMutation();

  const setHandler = async () => {
    try {
      const { data, error } = await mut({
        appId,
        settings,
      });
      if (error) {
        throw error;
      }
      notify("設定しました");
      setImportFileSettings(
        importFileSettingsSchema.parse(
          data?.insertImportFileSettingOne?.settings,
        ),
      );
      setAfterHandler();
    } catch (e) {
      console.error(e);
      notify("設定に失敗した。");
    }
  };

  return (
    <div className={"space-y-5"}>
      <div>ファイル取込設定</div>
      <Section title={"変換前エンコード"}>
        <EncodingSelect
          value={settings.encodingFrom}
          setValue={(value) =>
            setImportFileSettings({ ...settings, encodingFrom: value })
          }
        />
      </Section>
      <Section title={"変換後エンコード"}>
        <EncodingSelect
          value={settings.encodingTo}
          setValue={(value) =>
            setImportFileSettings({ ...settings, encodingTo: value })
          }
        />
      </Section>
      <Section title={"タイプ"}>
        <EncodingTypeSelect
          value={settings.encodingType}
          setValue={(value) =>
            setImportFileSettings({ ...settings, encodingType: value })
          }
        />
      </Section>
      <Section title={"改行コード"}>
        <LineBreakCodeSelect
          value={settings.splitSeparator}
          setValue={(value) =>
            setImportFileSettings({ ...settings, splitSeparator: value })
          }
        />
      </Section>
      <Section title={"ヘッダー行数"}>
        <NumberInput
          value={settings.headerRows}
          setValue={(value) =>
            setImportFileSettings({
              ...settings,
              headerRows: value ? value : 0,
            })
          }
          label={""}
        />
      </Section>
      <Section title={"フッター"}>
        <NumberInput
          value={settings.footerRows}
          setValue={(value) =>
            setImportFileSettings({
              ...settings,
              footerRows: value ? value : 0,
            })
          }
          label={""}
        />
      </Section>
      <Section title={"引用符"}>
        <QuotationSelect
          value={settings.quotation}
          setValue={(value) =>
            setImportFileSettings({ ...settings, quotation: value })
          }
        />
      </Section>
      <Section title={"区切り文字"}>
        <SplitterSelect
          value={settings.splitter}
          setValue={(value) =>
            setImportFileSettings({ ...settings, splitter: value })
          }
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
