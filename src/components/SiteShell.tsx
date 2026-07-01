import { ReactNode } from "react";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </I18nProvider>
  );
}
