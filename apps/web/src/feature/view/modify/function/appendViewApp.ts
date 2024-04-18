import {
  InputViewApp,
  InputViewApps,
} from "@feature/view/modify/type/inputViewApps";

export const appendViewApp = (
  viewApps: InputViewApps,
  viewApp: InputViewApp,
) => {
  const index = Object.keys(viewApps).length;
  viewApps[index] = viewApp;
};
