import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <div className="bg-stone-500 flex items-center justify-center h-full w-full">{children}</div>;
}
