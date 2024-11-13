import React from "react";
import Image from "next/image";
import Text from "../ui/Text";
import QuoteCarousel from "../OnBoarding/QuoteCarousel";
import { Button } from "../ui/button";
import { SignInButton } from "@clerk/nextjs";
import { ThemeToggle } from "../ui/theme-toggle";

const Pre = () => {
  return (
    <div className="min-h-screen max-w-[100vw] overflow-hidden bg-secondary flex justify-center items-center relative">
      <div className="w-5/6 min-h-[80vh] rounded-xl shadow-xl bg-secondary/20 backdrop-blur-sm absolute z-10 flex flex-col justify-center items-center gap-10 p-10">
        <span className="absolute right-3 top-3">
          <ThemeToggle />
        </span>
        <div className=" flex flex-col gap-5 text-center">
          <Text
            variant="h1"
            weight="medium"
            className="flex flex-col items-center gap-2 tracking-widest"
          >
            Welcome to
            <span className="animated-gradient-text tracking-normal">
              TodoMate!
            </span>
          </Text>
          <div className="max-w-7xl flex flex-col gap-4">
            <Text variant="p" className="">
              We&apos;re thrilled to have you here! 🎉 Organize your tasks, stay
              on top of your schedule, and boost your productivity — all
              completely free of cost.
            </Text>
            <Text variant="span" className="">
              Get started by adding your first to-do item, and let TodoMate help
              you stay focused on what matters most.
            </Text>
            <div className="">
              <SignInButton>
                <Button>Get Started</Button>
              </SignInButton>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center border-t-2 pt-5">
          <QuoteCarousel />
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-primary-foreground">
        <Image
          src="/todo.jpg"
          layout="fill"
          alt="background-image"
          className="object-cover opacity-20"
        />
      </div>
    </div>
  );
};

export default Pre;
