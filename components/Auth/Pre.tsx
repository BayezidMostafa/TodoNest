import React from "react";
import Text from "../ui/Text";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Pre = () => {
  return (
    <div>
      <Text variant="h1">Welcome to the Todo World!</Text>
      <SignInButton>
        <Button className="">Sign In</Button>
      </SignInButton>
    </div>
  );
};

export default Pre;
