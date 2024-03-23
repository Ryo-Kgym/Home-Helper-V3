import { CurrentGroupClient } from "@feature/group/current/CurrentGroupClient";
import { findUser } from "@persistence/browser/server/find-user";

export const CurrentGroupServer = async () => {
  const { group } = await findUser();

  return <CurrentGroupClient groupName={group.name} />;
};
