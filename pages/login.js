"use client";
import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import SignIn from "@/Components/SignIn";

const login = () => {
  const { data: session } = useSession();
  const { push } = useRouter();
  if (session) {
    {
      push("/account");
    }
  } else {
    return (
      <SignIn></SignIn>
    );
  }
};
export default login;
