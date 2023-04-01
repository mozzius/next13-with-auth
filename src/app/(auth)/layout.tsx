import { FancyBackground } from "@/components/fancy-background";

export default function AuthLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <FancyBackground />
      {children}
    </main>
  );
}
