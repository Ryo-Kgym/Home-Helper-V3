import Link from "next/link";
import { paths } from "@routing/paths";

export const RedirectListButton = ({ appId }: { appId: string }) => {
  return <Link href={paths.app.show({ id: appId })}>レコード一覧</Link>;
};
