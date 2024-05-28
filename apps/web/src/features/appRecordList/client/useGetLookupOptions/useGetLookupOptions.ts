import { filterLookupData } from "@features/appRecordList/client/useGetLookupOptions/filterLookupData";
import { sortLookupData } from "@features/appRecordList/client/useGetLookupOptions/sortLookupData";
import { convertToRecords } from "@oneforall/domain/convert/convertToRecords";
import { FieldOptionsLookup } from "@oneforall/domain/schema/appSchema";
import { RecordColumns } from "@oneforall/domain/schema/recordSchema";
import { useGetRecordsQuery } from "@v3/graphql/public";

export const useGetLookupOptions = ({
  options: {
    appId,
    selectFieldId,
    saveFieldId,
    sortFieldId,
    sortDirection,
    filters,
  },
  columns,
}: {
  options: FieldOptionsLookup;
  columns: RecordColumns;
}) => {
  const [{ data: recordsData }] = useGetRecordsQuery({ variables: { appId } });

  const records = convertToRecords(recordsData?.records ?? []);

  const lookupData = Object.values(records)
    .filter((r) => filterLookupData(r, filters, columns))
    .sort((a, b) => sortLookupData(a, b, sortFieldId, sortDirection))
    .map((r) => ({
      label: r.columns[selectFieldId]?.value ?? "",
      value: r.columns[saveFieldId]?.value ?? "",
    }));

  return {
    lookupData,
  };
};
