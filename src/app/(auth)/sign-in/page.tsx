import { AuthForm } from "../auth-form";
import { NextAuthError } from "../next-auth-error";
import Link from "next/link";

export default function SignInPage() {
  return (
    <section className="flex w-full max-w-sm flex-col items-center justify-center gap-6 rounded bg-white p-8 shadow-2xl">
      <div className="w-full space-y-2 text-center">
        <h1 className="mt-2 text-2xl font-bold">Hello again!</h1>
        <h2 className="text-sm text-gray-500">
          Sign in to your account here,
          <br /> or{" "}
          <Link href="/sign-up" className="underline">
            create an account
          </Link>
          .
        </h2>
      </div>
      <NextAuthError />
      <AuthForm sign="in" />
    </section>
  );
}
