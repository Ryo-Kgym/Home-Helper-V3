"use client";

import { useState } from "react";
import { Select } from "@components/ui/v4/select";
import { ViewFields } from "@oneforall/domain/schema/view/view-schema";

type AppListData = {
  label: string;
  value: string;
  fields: { label: string; value: string }[];
}[];

export const ModifyViewClient = ({
  appListData,
  viewFields,
}: {
  appListData: AppListData;
  viewFields: ViewFields;
}) => {
  return (
    <div>
      <div>
        <ViewAppOption appListData={appListData} viewFields={viewFields} />
      </div>
    </div>
  );
};

const ViewAppOption = ({
  appListData,
  viewFields,
}: {
  appListData: AppListData;
  viewFields: ViewFields;
}) => {
  const [appId, setAppId] = useState<string>("");
  const [appFieldObject, setAppFieldObject] = useState<
    Record<keyof typeof viewFields, string>
  >({});

  const fieldListData =
    appListData.find((app) => app.value === appId)?.fields ?? [];

  return (
    <div>
      <div className={"flex"}>
        <Select
          data={appListData}
          label={"アプリ"}
          value={appId}
          setValue={setAppId}
        />
        <div>
          {Object.entries(viewFields).map(([viewFieldId, field]) => (
            <Select
              key={viewFieldId}
              data={fieldListData}
              label={field.fieldName}
              value={appFieldObject[viewFieldId] ?? ""}
              setValue={(value) =>
                setAppFieldObject({
                  ...appFieldObject,
                  [viewFieldId]: value,
                })
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
