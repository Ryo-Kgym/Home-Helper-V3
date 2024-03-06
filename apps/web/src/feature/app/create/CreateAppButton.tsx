import type { AppFieldValue } from "@feature/app/create/app-field-value";

export const CreateAppButton = ({
  appName,
  value,
}: {
  appName: string;
  value: AppFieldValue;
}) => {
  const creatable =
    !!appName &&
    Object.values(value).length > 0 &&
    Object.values(value).every((field) => field.fieldName);

  const bgColor = creatable
    ? "bg-green-200 hover:bg-green-100 active:bg-green-300"
    : "bg-gray-200 cursor-not-allowed";
  const textColor = creatable ? "text-black" : "text-gray-500";

  return (
    <button
      className={`p-2 ${bgColor} ${textColor}`}
      onClick={() => {
        console.log({
          app: {
            name: appName,
          },
          fields: value,
        });
      }}
      disabled={!creatable}
    >
      アプリ作成
    </button>
  );
};
