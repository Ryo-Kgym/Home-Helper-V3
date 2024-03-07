import type { App } from "@feature/app/schema/app-schema";

export const ShowAppClient = ({ app }: { app: App }) => {
  return (
    <div>
      <h1>{app.name}</h1>
      <ul>
        {Object.values(app.fields).map((field) => {
          return <li key={field.fieldName}>{field.fieldName}</li>;
        })}
      </ul>
    </div>
  );
};
