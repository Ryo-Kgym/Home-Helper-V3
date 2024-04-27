import { paths } from "@routing/paths";
import Link from "next/link";

export const RedirectListButton = ({ appId }: { appId: string }) => {
  return <Link href={paths.app.show({ id: appId })}>レコード一覧</Link>;
};
