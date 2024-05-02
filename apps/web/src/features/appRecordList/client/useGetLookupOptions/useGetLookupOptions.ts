import { sortLookupData } from "@features/appRecordList/client/useGetLookupOptions/sortLookupData";
import { convertToRecords } from "@features/appRecordList/server/convertToRecords";
import { FieldOptionsLookup } from "@oneforall/domain/schema/appSchema";
import { useGetRecordsQuery } from "@v3/graphql/public";

export const useGetLookupOptions = ({
  options: { appId, selectFieldId, saveFieldId, sortFieldId, sortDirection },
}: {
  options: FieldOptionsLookup;
}) => {
  const [{ data: recordsData }] = useGetRecordsQuery({ variables: { appId } });

  const records = convertToRecords(recordsData?.records ?? []);

  const lookupData = Object.values(records)
    .sort((a, b) => sortLookupData(a, b, sortFieldId, sortDirection))
    .map((r) => ({
      label: r.columns[selectFieldId]?.value ?? "",
      value: r.columns[saveFieldId]?.value ?? "",
    }));

  return {
    lookupData,
  };
};
