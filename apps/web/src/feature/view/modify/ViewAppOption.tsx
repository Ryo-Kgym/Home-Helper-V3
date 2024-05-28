import { useState } from "react";
import { Button } from "@components/ui/v4/button";
import { Select } from "@components/ui/v4/select";
import { useAppendViewApp } from "@feature/view/modify/hook";
import { AppListData } from "@feature/view/modify/type/appListData";
import { ViewFields } from "@oneforall/domain/schema/view/viewSchema";

/**
 * @package
 */
export const ViewAppOption = ({
  appListData,
  viewFields,
}: {
  appListData: AppListData;
  viewFields: ViewFields;
}) => {
  const [appId, setAppId] = useState<string>("");
  const [appFieldObject, setAppFieldObject] = useState<
    Record<
      keyof typeof viewFields,
      {
        appFieldId: string;
      }
    >
  >({});
  const append = useAppendViewApp();

  const fieldListData =
    appListData.find((app) => app.value === appId)?.fields ?? [];

  const disabled = Object.values(viewFields).some(
    (field) => !appFieldObject[field.id]?.appFieldId,
  );

  return (
    <div>
      <div className={"flex space-x-4"}>
        <Button
          label={"アプリ追加"}
          clickHandler={() => {
            append({
              mode: "add",
              appId,
              viewFields: appFieldObject,
            });

            setAppId("");
            setAppFieldObject({});
          }}
          type={"add"}
          disabled={disabled}
        />
        <Select
          data={appListData}
          label={"アプリ"}
          value={appId}
          setValue={setAppId}
        />
        <div className={"flex"}>
          {Object.entries(viewFields).map(([viewFieldId, field]) => (
            <Select
              key={viewFieldId}
              data={fieldListData.filter(
                (f) => f.fieldKind === field.fieldKind,
              )}
              label={field.fieldName}
              value={appFieldObject[viewFieldId]?.appFieldId ?? ""}
              setValue={(value) => {
                setAppFieldObject({
                  ...appFieldObject,
                  [viewFieldId]: {
                    appFieldId: value,
                  },
                });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
