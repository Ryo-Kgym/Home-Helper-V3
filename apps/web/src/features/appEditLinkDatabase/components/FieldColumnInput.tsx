import { FieldContainer } from "@components/ui/v4/FieldContainer";
import { Table } from "@components/ui/v4/table";
import { TextInput } from "@components/ui/v4/textInput";
import { Fields } from "@oneforall/domain/schema/appSchema";
import { FieldColumnMaps } from "@oneforall/domain/schema/linkDatabase/fieldColumnMapsSchema";

export const FieldColumnInput = ({
  label,
  fieldColumnMaps,
  setFieldColumnMaps,
  fields,
}: {
  label: string;
  fieldColumnMaps: FieldColumnMaps;
  setFieldColumnMaps: (fieldColumnMaps: FieldColumnMaps) => void;
  fields: Fields;
}) => {
  return (
    <FieldContainer label={label}>
      <Table>
        <Table.Header
          headerItems={[
            {
              name: "アプリフィールド名",
            },
            {
              name: "外部DBのカラム名",
            },
          ]}
        />
        <Table.Body
          data={Object.values(fields)}
          renderItem={(field) => (
            <>
              <Table.BodyTd>{field.fieldName}</Table.BodyTd>
              <Table.BodyTd>
                <TextInput
                  label={""}
                  value={fieldColumnMaps[field.id]?.columnName ?? ""}
                  setValue={(v) => {
                    setFieldColumnMaps({
                      ...fieldColumnMaps,
                      [field.id]: { columnName: v },
                    });
                  }}
                />
              </Table.BodyTd>
            </>
          )}
        />
      </Table>
    </FieldContainer>
  );
};
