import Link from "next/link";
import { paths } from "@routing/paths";

export const RedirectShowButton = ({ appId }: { appId: string }) => {
  return <Link href={paths.app.show({ id: appId })}>アプリ</Link>;
};
