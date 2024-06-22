import { InputViewApps } from "../type/inputViewApps";

export const changeToModifyMode = (
  viewApps: InputViewApps,
  viewAppId: string,
) => {
  const a = Object.values(viewApps).find((app) => app.mode === "add");
  if (a) {
    a.mode = "modify";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    a.id = viewAppId;
  }
};
