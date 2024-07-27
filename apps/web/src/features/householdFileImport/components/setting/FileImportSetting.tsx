import type { FC, ReactNode } from "react";
// eslint-disable-next-line strict-dependencies/strict-dependencies
import { useImportFileSettings } from "@features/appImportFileSetting/client/useImportSettingsState";
// eslint-disable-next-line strict-dependencies/strict-dependencies
import { EncodingSelect } from "@features/appImportFileSetting/components/EncodingSelect";
// eslint-disable-next-line strict-dependencies/strict-dependencies
import { EncodingTypeSelect } from "@features/appImportFileSetting/components/EncodingTypeSelect";
// eslint-disable-next-line strict-dependencies/strict-dependencies
import { LineBreakCodeSelect } from "@features/appImportFileSetting/components/LineBreakCodeSelect";
// eslint-disable-next-line strict-dependencies/strict-dependencies
import { SplitterSelect } from "@features/appImportFileSetting/components/SplitterSelect";

export const FileImportSetting: FC = () => {
  const { importFileSettings, setImportFileSettings } = useImportFileSettings();

  return (
    <div className={"space-y-5"}>
      <span className={"font-bold"}>ファイル取込設定</span>
      <Section title={"変換前エンコード"}>
        <EncodingSelect
          value={importFileSettings.encodingFrom}
          setValue={(value) =>
            setImportFileSettings({
              ...importFileSettings,
              encodingFrom: value,
            })
          }
        />
      </Section>
      <Section title={"変換後エンコード"}>
        <EncodingSelect
          value={importFileSettings.encodingTo}
          setValue={(value) =>
            setImportFileSettings({ ...importFileSettings, encodingTo: value })
          }
        />
      </Section>
      <Section title={"タイプ"}>
        <EncodingTypeSelect
          value={importFileSettings.encodingType}
          setValue={(value) =>
            setImportFileSettings({
              ...importFileSettings,
              encodingType: value,
            })
          }
        />
      </Section>
      <Section title={"改行コード"}>
        <LineBreakCodeSelect
          value={importFileSettings.splitSeparator}
          setValue={(value) =>
            setImportFileSettings({
              ...importFileSettings,
              splitSeparator: value,
            })
          }
        />
      </Section>
      <Section title={"区切り文字"}>
        <SplitterSelect
          value={importFileSettings.splitter}
          setValue={(value) =>
            setImportFileSettings({ ...importFileSettings, splitter: value })
          }
        />
      </Section>
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div>
    <span>{title}</span>
    {children}
  </div>
);
