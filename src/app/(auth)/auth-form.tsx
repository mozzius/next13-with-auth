"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/lib/hooks/use-toast";
import { Github, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props {
  sign: "in" | "up";
}

export function AuthForm({ sign }: Props) {
  const [emailLoading, setEmailLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const searchParams = useSearchParams();

  const isLoading = emailLoading || githubLoading;

  const callbackUrl = searchParams?.get("from") || "/dashboard";

  return (
    <div className="flex w-full flex-col gap-8">
      <form
        className="w-full space-y-2"
        onSubmit={async (e) => {
          e.preventDefault();

          setEmailLoading(true);

          const email = e.currentTarget.email.value;

          const res = await signIn("email", {
            email,
            redirect: false,
            callbackUrl,
          });

          setEmailLoading(false);

          switch (res?.ok) {
            case true:
              return toast({
                title: "Check your email",
                description:
                  "We sent you a login link. Be sure to check your spam too.",
              });
            case false:
              return toast({
                title: "Error",
                description: "Your sign in request failed. Please try again.",
                variant: "destructive",
              });
            default:
              return toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
              });
          }
        }}
      >
        <Input
          name="email"
          type="email"
          placeholder="name@example.com"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
        />
        <Button
          variant="default"
          type="submit"
          width="full"
          icon={Mail}
          disabled={isLoading}
          loading={emailLoading}
        >
          Sign {sign} with email
        </Button>
      </form>

      <div className="inline-flex w-full items-center justify-center">
        <Separator />
        <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-sm text-gray-700">
          or continue with
        </span>
      </div>

      <Button
        variant="outline"
        onClick={() => {
          setGithubLoading(true);
          signIn("github", { callbackUrl });
        }}
        icon={Github}
        disabled={isLoading}
        loading={githubLoading}
      >
        GitHub
      </Button>
    </div>
  );
}
