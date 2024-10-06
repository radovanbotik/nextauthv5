"use client";
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import SocialLogin from "./SocialLogin";
import BackButton from "./BackButton";

type TCardWrapper = {
  backButtonLabel: string;
  backButtonHref: string;
  children: ReactNode;
  headerLabel: string;
  showSocial?: boolean;
};

export default function CardWrapper({
  backButtonLabel,
  backButtonHref,
  children,
  headerLabel,
  showSocial,
}: TCardWrapper) {
  return (
    <Card className="w-96">
      <CardHeader className="flex flex-col">
        <div>🔐Auth</div>
        {headerLabel}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <SocialLogin />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}
