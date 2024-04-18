import { InputViewApps } from "@feature/view/modify/inputViewApps";

export const changeToModifyMode = (viewApps: InputViewApps) => {
  Object.values(viewApps).forEach((app) => {
    app.mode = "modify";
  });
};
