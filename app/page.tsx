"use client";

import { UserButton } from "@clerk/nextjs";

import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  const email = user?.emailAddresses[0]?.emailAddress;

  console.log(email);
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-primary">
      <UserButton />
    </main>
  );
}
