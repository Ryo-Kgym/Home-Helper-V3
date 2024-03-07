import type { App } from "@feature/app/schema/app-schema";

export const ShowAppClient = ({ app }: { app: App }) => {
  return (
    <div>
      <div className={"text-3xl"}>{app.name}</div>
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
