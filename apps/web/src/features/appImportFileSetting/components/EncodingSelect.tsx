import type { Encoding } from "features/appImportFileSetting/client/importFileSettingsSchema";

import { Select } from "../../../components/ui/select/v4";

export const EncodingSelect = ({
  value,
  setValue,
}: {
  value: Encoding;
  setValue: (value: Encoding) => void;
}) => {
  return (
    <Select
      data={Object.entries(encodingArray)
        .filter(([, v]) => v.valid)
        .map(([k]) => ({
          value: k as Encoding,
          label: k,
        }))}
      label={""}
      value={value}
      setValue={setValue}
    />
  );
};

const encodingArray: Record<Encoding, { valid: boolean }> = {
  ASCII: { valid: false },
  BINARY: { valid: false },
  JIS: { valid: false },
  UTF16: { valid: false },
  UTF16BE: { valid: false },
  UTF16LE: { valid: false },
  UTF32: { valid: false },
  UTF8: { valid: true },
  EUCJP: { valid: false },
  SJIS: { valid: true },
  UNICODE: { valid: true },
  AUTO: { valid: false },
};
