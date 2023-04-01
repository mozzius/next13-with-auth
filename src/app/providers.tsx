"use client";

import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <SessionProvider>
      {children}
      <Toaster />
    </SessionProvider>
  );
};
