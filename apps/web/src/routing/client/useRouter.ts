import { useRouter as useRouterNext } from "next/navigation";

export const useRouter = () => {
  const { push } = useRouterNext();
  return { push };
};
