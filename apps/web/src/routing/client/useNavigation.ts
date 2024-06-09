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
    return push(`${pathname}?${searchParams.toString()}&${key}=${value}`);
  };

  return { prependParamAndPush };
};
