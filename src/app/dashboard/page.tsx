import { FancyBackground } from "@/components/fancy-background";
import { SignOutButton } from "@/components/sign-out-button";
import { AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@/components/ui/avatar";
import { getCurrentUser } from "@/lib/session";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <FancyBackground />
      <div className="min-w-[400px] space-y-4 rounded border bg-white p-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={user.image!} alt={user.name!} />
            <AvatarFallback>
              {user.name
                ?.split(" ")
                .filter(Boolean)
                .map((x) => x[0].toLocaleUpperCase())}
            </AvatarFallback>
          </Avatar>
          <p className="text-xl font-medium">{user.name}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-gray-500">{user.email}</p>
          <SignOutButton variant="subtle">Sign out</SignOutButton>
        </div>
      </div>
    </main>
  );
}
