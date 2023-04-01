"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useState } from "react";

interface Props extends ButtonProps {}

export const SignOutButton = (props: Props) => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      onClick={async () => {
        setLoading(true);
        await signOut({
          callbackUrl: "/",
        });
        setLoading(false);
      }}
      disabled={loading || props.disabled}
      {...props}
    />
  );
};
