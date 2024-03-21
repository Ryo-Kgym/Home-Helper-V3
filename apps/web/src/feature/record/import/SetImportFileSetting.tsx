import type { Encoding, EncodingType } from "@feature/app/schema";
import type { ReactNode } from "react";
import { useState } from "react";
import { Button } from "@components/ui/v4/button";
import { EncodingSelect } from "@feature/record/import/EncodingSelect";
import { EncodingTypeSelect } from "@feature/record/import/EncodingTypeSelect";

export const SetImportFileSetting = ({ appId }: { appId: string }) => {
  const [encodingFrom, setEncodingFrom] = useState<Encoding>("UNICODE");
  const [encodingTo, setEncodingTo] = useState<Encoding>("UNICODE");
  const [type, setType] = useState<EncodingType>("array");

  const setHandler = () => {};

  return (
    <div className={"space-y-5"}>
      <div>ファイル取込設定</div>
      <Section title={"変換前エンコード"}>
        <EncodingSelect value={encodingFrom} setValue={setEncodingFrom} />
      </Section>
      <Section title={"変換後エンコード"}>
        <EncodingSelect value={encodingTo} setValue={setEncodingTo} />
      </Section>
      <Section title={"タイプ"}>
        <EncodingTypeSelect value={type} setValue={setType} />
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
