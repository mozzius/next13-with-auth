"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useState } from "react";

interface Props extends ButtonProps {
  callbackUrl?: string;
}

export const SignOutButton = ({ callbackUrl = "/", ...props }: Props) => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      onClick={() => {
        setLoading(true);
        signOut({ callbackUrl });
      }}
      loading={loading || props.loading}
      {...props}
    />
  );
};
