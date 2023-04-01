import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

// TODO! Fix this api. Not easy to use between RSC and route handlers

// `never` is so cool!

function redirectToNewUserFlow(): never {
  redirect("/new-user");
}

function redirectToSignIn(): never {
  redirect("/sign-in");
}

export async function maybeGetSession(redirect = true) {
  const session = await getServerSession(authOptions);

  if (session?.user && redirect) {
    // force user to go through the rest of the sign in flow
    if (!session.user.name) {
      // || !session.user.image) {
      redirectToNewUserFlow();
    }
  }

  return session;
}

export async function maybeGetCurrentUser(redirect = true) {
  const session = await maybeGetSession(redirect);

  return session?.user ?? null;
}

export async function getSession(
  redirect = true,
  onError: () => never = redirectToSignIn
) {
  const session = await maybeGetSession(redirect);

  if (!session) {
    onError();
  }

  return session;
}

export async function getCurrentUser(
  redirect = true,
  onError: () => never = redirectToSignIn
) {
  const session = await getSession(redirect, onError);

  return session.user;
}
