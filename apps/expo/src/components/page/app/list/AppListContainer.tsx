import { paths } from "~/app/paths";
import { AppListPresenter } from "./AppListPresenter";

export const AppListContainer = () => {
  const apps = [
    // @formatter::off
    { appName: "家計簿アプリ", path: paths.household.account },
  ];

  return <AppListPresenter apps={apps} />;
};
