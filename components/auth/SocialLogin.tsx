"use client";

import { Button } from "../ui/button";

export default function SocialLogin() {
  return (
    <div className="flex gap-4">
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        GOOGLE
      </Button>
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        GITHUB
      </Button>
    </div>
  );
}
