import { NewUserForm } from "./new-user-form";
import { getSession } from "@/lib/session";

export default async function SignInPage() {
  const session = await getSession(false);

  return (
    <section className="flex w-full max-w-sm flex-col items-center justify-center gap-6 rounded bg-white p-8 shadow-2xl">
      <div className="w-full space-y-2 text-center">
        <h1 className="mt-2 text-2xl font-bold">Welcome</h1>
        <h2 className="text-sm text-gray-500">
          Why don&apos;t you tell us a bit about yourself?
        </h2>
      </div>
      <NewUserForm user={session.user} />
    </section>
  );
}
