import { paths } from "@routing/paths";
import Link from "next/link";

export const RedirectSettingButton = ({ appId }: { appId: string }) => {
  return <Link href={paths.app.setting({ id: appId })}>アプリ設定変更</Link>;
};
