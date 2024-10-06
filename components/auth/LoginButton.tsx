"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type TLoginButton = {
  asChild?: boolean;
  children: ReactNode;
  mode?: "modal" | "redirect";
};

export default function LoginButton({ asChild, children, mode = "modal" }: TLoginButton) {
  const router = useRouter();

  function onClick() {
    return router.push("/auth/login");
  }

  if (mode === "modal") {
    return <span>modal</span>;
  }

  return <div onClick={() => onClick()}>{children}</div>;
}
