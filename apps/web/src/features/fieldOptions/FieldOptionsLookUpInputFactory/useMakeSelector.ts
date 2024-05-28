import { useFindUser } from "@persistence/browser/client/useFindUser";
import { useGetAppFieldListQuery } from "@v3/graphql/public";
import { parseToFields } from "@v3/graphql/public/convert/parseToFields";

/**
 * @package
 */
export const useMakeSelector = ({ appId }: { appId: string }) => {
  const { group } = useFindUser();
  const [{ data }] = useGetAppFieldListQuery({
    variables: {
      groupId: group.id,
    },
    pause: !group.id,
  });

  const appListData =
    data?.group?.apps.map((a) => ({
      label: a.name,
      value: a.id,
    })) ?? [];

  const fieldListData =
    data?.group?.apps
      .find((a) => a.id === appId)
      ?.fields.map((f) => ({
        label: f.name,
        value: f.id,
      })) ?? [];

  const fields = parseToFields(
    data?.group?.apps.find((a) => a.id === appId)?.fields ?? [],
  );

  return {
    appListData,
    fieldListData,
    fields,
  };
};
