import type { Group } from "@domain/model/Group";
import type { User } from "@domain/model/User";
import { SelectGroupContainer } from "@feature/group/select/SelectGroupContainer";
import { findEmail } from "@persistence/browser/server/find-email";
import { fetchQuery } from "@persistence/database/server/fetchQuery";
import { GetUserByEmailDocument } from "@v3/graphql/public/type";

export const SelectGroupServer = async () => {
  const email = await findEmail();

  const { data } = await fetchQuery(GetUserByEmailDocument, { email });

  const user: User = {
    id: data?.userByEmail[0]?.id ?? "",
    name: data?.userByEmail[0]?.name ?? "",
    email: data?.userByEmail[0]?.email ?? "",
  };

  const groups: Group[] =
    data?.userByEmail[0]?.affiliation?.map((affiliation) => ({
      id: affiliation.group?.id,
      name: affiliation.group?.name ?? "",
      role: affiliation.groupRole,
    })) ?? [];

  return <SelectGroupContainer user={user} groups={groups} />;
};
