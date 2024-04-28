import { NumberInput } from "@components/ui/v4/textInput";
import { useImportFileFieldMapping } from "@feature/app/importFileFieldMapping/hooks/useImportFileFieldMapping";
import { useSetFieldIndex } from "@feature/app/importFileFieldMapping/hooks/useSetFieldIndex";

export const SetImportFileFieldMapping = () => {
  const importFileFieldMapping = useImportFileFieldMapping();
  const setFieldIndex = useSetFieldIndex();

  return (
    <div>
      {Object.entries(importFileFieldMapping.fieldMappings).map(
        ([fieldId, value]) => (
          <div key={fieldId}>
            <div>
              <NumberInput
                label={value.fieldName}
                value={value.fileIndex ?? ""}
                setValue={(value) => {
                  setFieldIndex(fieldId, Number(value) || null);
                }}
              />
            </div>
          </div>
        ),
      )}
    </div>
  );
};
