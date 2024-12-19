import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useNavigation = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const prependParamAndPush = (args: Record<string, string>) => {
    const params = Object.entries(args).map(([key, value]) => ({ key, value }));

    const searchParamJoined = Object.entries(
      Object.fromEntries(searchParams.entries()),
    )
      .filter(([k]) => !params.map((p) => p.key).includes(k))
      .map(([k, v]) => `${k}=${v}`)
      .join("&");

    const newParams = params
      .map(({ key, value }) => `${key}=${value}`)
      .join("&");

    return push(`?${searchParamJoined}&${newParams}`);
  };

  return { prependParamAndPush, refresh: () => push(pathname) };
};
