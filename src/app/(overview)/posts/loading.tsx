"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Loading() {
  const { isLoading, user } = useUser();

  return (
    <div>
      {isLoading && (
        <div
          style={{
            position: "relative",
            height: "400px",
          }}
          className="flex justify-center items-center"
        >
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
}
