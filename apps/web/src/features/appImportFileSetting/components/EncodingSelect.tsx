import type { Encoding } from "@oneforall/domain/schema/importFileSettingsSchema";
import { Select } from "@components/ui/v4/select";

export const EncodingSelect = ({
  value,
  setValue,
}: {
  value: Encoding;
  setValue: (value: Encoding) => void;
}) => {
  return (
    <Select
      data={Object.keys(encodingArray).map((k) => ({
        value: k as Encoding,
        label: k,
      }))}
      label={""}
      value={value}
      setValue={setValue}
    />
  );
};

const encodingArray: Record<Encoding, void> = {
  ASCII: undefined,
  BINARY: undefined,
  JIS: undefined,
  UTF16: undefined,
  UTF16BE: undefined,
  UTF16LE: undefined,
  UTF32: undefined,
  UTF8: undefined,
  EUCJP: undefined,
  SJIS: undefined,
  UNICODE: undefined,
  AUTO: undefined,
};
