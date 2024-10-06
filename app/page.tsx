import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-stone-500 h-full flex items-center justify-center">
      <LoginButton mode="redirect">
        <Button>Sign In</Button>
      </LoginButton>
    </div>
  );
}
