import { NumberInput } from "@components/ui/v4/textInput";
import { useImportFileFieldMapping } from "@features/appImportFileFieldMapping/client/useImportFileFieldMapping";
import { useSetFieldIndex } from "@features/appImportFileFieldMapping/client/useSetFieldIndex";

export const SetImportFileFieldMapping = () => {
  const importFileFieldMapping = useImportFileFieldMapping();
  const setFieldIndex = useSetFieldIndex();

  return (
    <div>
      {Object.entries(importFileFieldMapping).map(([fieldId, value]) => (
        <div key={fieldId}>
          <div>
            <NumberInput
              label={value.fieldName}
              value={value.fileColumnIndex ?? ""}
              setValue={(value) => {
                if (value === "") {
                  setFieldIndex(fieldId, null);
                  return;
                }

                setFieldIndex(fieldId, value);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
