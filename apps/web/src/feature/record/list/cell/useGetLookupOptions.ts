import { convertToRecords } from "@feature/record/list/convert-to-records";
import { FieldOptionsLookup } from "@oneforall/domain/schema";
import { useGetRecordsQuery } from "@v3/graphql/public";

export const useGetLookupOptions = ({
  options: { appId, selectFieldId, saveFieldId },
}: {
  options: FieldOptionsLookup;
}) => {
  const [{ data: recordsData }] = useGetRecordsQuery({ variables: { appId } });

  const records = convertToRecords(recordsData?.records ?? []);

  const lookupData = Object.values(records).map((r) => ({
    label: r.columns[selectFieldId]?.value ?? "",
    value: r.columns[saveFieldId]?.value ?? "",
  }));

  return {
    lookupData,
  };
};
