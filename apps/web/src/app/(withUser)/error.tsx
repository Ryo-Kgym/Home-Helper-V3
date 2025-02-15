"use client";

import { useEffect } from "react";

import { useRouter } from "../../routing/client/useRouter";
import { paths } from "../../routing/paths";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { push } = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "1rem",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
        }}
      >
        {error.message}
      </h2>
      <button
        type="button"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => push(paths.group.select)
        }
      >
        Go to the group selection page
      </button>
    </div>
  );
}
