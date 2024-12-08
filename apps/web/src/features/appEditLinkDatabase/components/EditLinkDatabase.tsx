import { useState } from "react";
import { Fields } from "@oneforall/domain/schema/appSchema";
import { FieldColumnMaps } from "@oneforall/domain/schema/linkDatabase/fieldColumnMapsSchema";
import {
  Database,
  LinkDatabase,
  linkDatabaseSchema,
} from "@oneforall/domain/schema/linkDatabase/linkDatabaseSchema";

import { Button } from "~/components/ui/v4/button";
import { MultiTextInput } from "~/components/ui/v4/multiTextInput";
import { notify } from "~/components/ui/v4/notify/notify";
import { Select } from "~/components/ui/v4/select";
import { useUpdateLinkDatabase } from "../hooks/useUpdateLinkDatabase";
import { FieldColumnInput } from "./FieldColumnInput";

export const EditLinkDatabase = ({
  appId,
  defaultLinkDatabase,
  fields,
}: {
  appId: string;
  defaultLinkDatabase: LinkDatabase;
  fields: Fields;
}) => {
  const [database, setDatabase] = useState<Database>(
    defaultLinkDatabase.database,
  );
  const [connection, setConnection] = useState(
    JSON.stringify(defaultLinkDatabase.connection),
  );
  const [sql, setSql] = useState(defaultLinkDatabase.sql);
  const [parameters, setParameters] = useState(
    JSON.stringify(defaultLinkDatabase.parameters),
  );
  const [fieldColumnMaps, setFieldColumnMaps] = useState<FieldColumnMaps>(
    defaultLinkDatabase.fieldColumnMaps,
  );

  const { updateLinkDatabase } = useUpdateLinkDatabase(appId);

  const updateHandler = async () => {
    const safeLinkDatabase = linkDatabaseSchema.safeParse({
      database,
      connection: JSON.parse(connection),
      sql,
      parameters: JSON.parse(parameters),
      fieldColumnMaps,
    });

    if (!safeLinkDatabase.success) {
      notify("入力したデータに誤りがあります");
      return;
    }

    try {
      await updateLinkDatabase(safeLinkDatabase.data);

      notify("更新しました");
    } catch (e) {
      notify("入力したデータに誤りがあります");
    }
  };

  return (
    <div className={"space-y-5"}>
      <div>
        <Select
          data={[{ value: "neon", label: "NEON" }]}
          label={"DB種類"}
          value={database}
          setValue={setDatabase}
        />
      </div>
      <div>
        <MultiTextInput
          label={"接続方法"}
          value={connection}
          setValue={setConnection}
        />
      </div>
      <div>
        <MultiTextInput label={"SQL"} value={sql} setValue={setSql} />
      </div>
      <div>
        <MultiTextInput
          label={"パラメータ"}
          value={parameters}
          setValue={setParameters}
        />
      </div>
      <div>
        <FieldColumnInput
          label={"フィールドカラムマップ"}
          fieldColumnMaps={fieldColumnMaps}
          setFieldColumnMaps={setFieldColumnMaps}
          fields={fields}
        />
      </div>
      <div>
        <Button label={"更新"} clickHandler={updateHandler} type={"modify"} />
      </div>
    </div>
  );
};
