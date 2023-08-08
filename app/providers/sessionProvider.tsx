"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

interface props {
  children?: React.ReactNode;
}

function NextAUthSession({ children }: props) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAUthSession;
