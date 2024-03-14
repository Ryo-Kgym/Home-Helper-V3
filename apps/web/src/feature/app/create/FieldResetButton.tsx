import type { AppFieldValue } from "@feature/app/create/app-field-value";
import { Button } from "@components/ui/v4/button";

export const FieldResetButton = ({
  setValue,
}: {
  setValue: React.Dispatch<React.SetStateAction<AppFieldValue>>;
}) => (
  <Button
    label="フィールドリセット"
    clickHandler={() => {
      setValue({});
    }}
    type={"reset"}
  />
);
