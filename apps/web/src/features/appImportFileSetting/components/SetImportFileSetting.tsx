import type { ReactNode } from "react";
import { importFileSettingsSchema } from "@oneforall/domain/schema/importFileSettingsSchema";
import { useInsertImportFileSettingMutation } from "@v3/graphql/public";

import { Button } from "~/components/ui/v4/button";
import { notify } from "~/components/ui/v4/notify/notify";
import { NumberInput } from "~/components/ui/v4/textInput";
import { useImportFileSettings } from "../client/useImportSettingsState";
import { EncodingSelect } from "./EncodingSelect";
import { EncodingTypeSelect } from "./EncodingTypeSelect";
import { LineBreakCodeSelect } from "./LineBreakCodeSelect";
import { QuotationSelect } from "./QuotationSelect";
import { SplitterSelect } from "./SplitterSelect";

export const SetImportFileSetting = ({
  appId,
  setAfterHandler,
}: {
  appId: string;
  setAfterHandler: () => void;
}) => {
  const { importFileSettings, setImportFileSettings } = useImportFileSettings();
  const [, mut] = useInsertImportFileSettingMutation();

  const setHandler = async () => {
    try {
      const { data, error } = await mut({
        appId,
        settings: importFileSettings,
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
      <Section title={"ヘッダー行数"}>
        <NumberInput
          value={importFileSettings.headerRows}
          setValue={(value) =>
            setImportFileSettings({
              ...importFileSettings,
              headerRows: value ? value : 0,
            })
          }
          label={""}
        />
      </Section>
      <Section title={"フッター"}>
        <NumberInput
          value={importFileSettings.footerRows}
          setValue={(value) =>
            setImportFileSettings({
              ...importFileSettings,
              footerRows: value ? value : 0,
            })
          }
          label={""}
        />
      </Section>
      <Section title={"引用符"}>
        <QuotationSelect
          value={importFileSettings.quotation}
          setValue={(value) =>
            setImportFileSettings({ ...importFileSettings, quotation: value })
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
