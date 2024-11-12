"use client";

import Text from "@/components/ui/Text";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user, isLoaded, isSignedIn } = useUser();
  console.log(user);
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Text variant="h1">B-Plate V1</Text>
      <Text>Font: Monserrat</Text>
      <Text>State management: Zustand</Text>
      <Text>UI Kit: ShadCN (Dark/Light)</Text>
      <UserButton />
    </main>
  );
}
