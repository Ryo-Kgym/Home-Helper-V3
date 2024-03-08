import type { App } from "@feature/app/schema/app-schema";

export const ShowAppClient = ({ app }: { app: App }) => {
  return (
    <div className={"space-y-10"}>
      <div
        className={"flex w-full items-end space-x-5 border-b-2 border-gray-300"}
      >
        <div className={"text-3xl"}>{app.name}</div>
        <button>アプリ設定変更</button>
        <button>レコード追加</button>
      </div>
      <table>
        <thead>
          <tr className={"bg-gray-50"}>
            {Object.values(app.fields).map((field) => (
              <td
                key={field.fieldName}
                className={"border border-gray-300 p-2"}
              >
                {field.fieldName}
              </td>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};
