import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { Button } from "@components/ui/v4/button";

export const FieldResetButton = ({
  setValue,
  setFieldCount,
}: {
  setValue: React.Dispatch<React.SetStateAction<AppFieldValue>>;
  setFieldCount: React.Dispatch<React.SetStateAction<number>>;
}) => (
  <Button
    label="フィールドリセット"
    clickHandler={() => {
      setValue({});
      setFieldCount(0);
    }}
    type={"reset"}
  />
);
