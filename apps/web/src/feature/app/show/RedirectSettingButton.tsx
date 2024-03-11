import Link from "next/link";
import { paths } from "@routing/paths";

export const RedirectSettingButton = ({ appId }: { appId: string }) => {
  return <Link href={paths.app.setting({ id: appId })}>アプリ設定変更</Link>;
};
