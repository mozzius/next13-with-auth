"use client";

import { AlertTriangle } from "lucide-react";
import { useSearchParams } from "next/navigation";

export const NextAuthError = () => {
  const searchParams = useSearchParams();

  const error = searchParams?.get("error");

  if (!error) return <div />; // for spacing

  return (
    <div className="flex gap-4 rounded bg-red-50 p-4 text-red-500">
      <div className="mt-1 grid shrink-0 grow-0">
        <AlertTriangle size={16} />
      </div>
      <p className="text-medium pr-4 text-sm">
        An error occured. Please try logging in again.
      </p>
    </div>
  );
};
