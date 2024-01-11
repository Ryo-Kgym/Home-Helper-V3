import { UserButton } from "@clerk/nextjs";

type LoginStatusPresenterProps = {
  displayName: string;
};
export const LoginStatusPresenter = ({
  displayName,
}: LoginStatusPresenterProps) => (
  <div className={"text-right flex justify-end"}>
    <div className={"mt-1 mr-4 max-sm:hidden"}>ログイン：{displayName}</div>
    <UserButton afterSignOutUrl="/" />
  </div>
);
