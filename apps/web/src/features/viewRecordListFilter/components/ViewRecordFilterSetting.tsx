import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@components/ui/v4/button";
import { Table } from "@components/ui/v4/table";
import { InputFieldFilter } from "@features/viewRecordListFilter/components/InputFieldFilter";
import { ViewFilters } from "@oneforall/domain/schema/view/viewFilterSchema";
import { View } from "@oneforall/domain/schema/view/viewSchema";
import { paths } from "@routing/paths";

export const ViewRecordFilterSetting = ({
  view,
  defaultViewFilters = {},
}: {
  view: View;
  defaultViewFilters: ViewFilters | undefined;
}) => {
  const [filters, setFilters] = useState<ViewFilters>(defaultViewFilters);
  const { push } = useRouter();

  useEffect(() => {
    console.log("[filters]", filters);
  }, [filters]);

  return (
    <div className={"space-y-10"}>
      <div>
        <div>フィルターを入力</div>
        <Table>
          <tbody>
            <Table.BodyTr>
              <InputFieldFilter
                index={Object.keys(filters).length}
                viewFields={view.fields}
                filter={{
                  fieldId: "",
                  fieldKind: "text",
                  operator: "eq",
                  value: "",
                  filterComplexity: "and",
                }}
                setFilters={setFilters}
              />
            </Table.BodyTr>
          </tbody>
        </Table>
      </div>

      <div>
        <div>フィルター一覧</div>
        <Table>
          <Table.Body
            data={Object.entries(filters)}
            renderItem={([index, filter]) => (
              <InputFieldFilter
                index={Number(index)}
                viewFields={view.fields}
                filter={filter}
                setFilters={setFilters}
                disabled
              />
            )}
          ></Table.Body>
        </Table>
      </div>
      <div>
        <Button
          label={"フィルターをクリア"}
          type={"reset"}
          clickHandler={() => setFilters({})}
        />
        <Button
          label={"フィルター適用"}
          type={"modify"}
          clickHandler={() => {
            push(
              paths.view.show({ id: view.id }) +
                "?filter=" +
                JSON.stringify(filters),
            );
          }}
        />
      </div>
    </div>
  );
};
