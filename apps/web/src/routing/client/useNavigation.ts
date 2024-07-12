import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useNavigation = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const prependParamAndPush = ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }) => {
    const searchParamJoined = Object.entries(
      Object.fromEntries(searchParams.entries()),
    )
      .filter(([k]) => k !== key)
      .map(([k, v]) => `${k}=${v}`)
      .join("&");

    return push(`${pathname}?${searchParamJoined}&${key}=${value}`);
  };

  return { prependParamAndPush };
};
