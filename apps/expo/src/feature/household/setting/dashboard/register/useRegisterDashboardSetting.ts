import type {
  ArgsMapType,
  Feature,
} from "~/feature/household/setting/dashboard/type";

export const useRegisterDashboardSetting = () => {
  const registerDashboardSetting = async ({
    feature,
    argsMapTypes,
  }: {
    feature: Feature;
    argsMapTypes: ArgsMapType[];
  }) => {
    console.error(feature, argsMapTypes);
    return Promise.resolve();
  };

  return {
    registerDashboardSetting,
  };
};
