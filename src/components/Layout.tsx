import Header from "@/components/Header";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto mt-[65px] px-4 py-16">
          {children}
        </div>
      </main>
    </div>
  );
}
