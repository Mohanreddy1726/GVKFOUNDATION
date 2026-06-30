"use client";
import { usePathname } from "next/navigation";
import { I18nProvider } from "../../lib/i18n";
import { Header } from "./Header";
import { FloatingDonatePill } from "../ui/FloatingDonatePill";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isWelcome = pathname === "/";
  return (
    <I18nProvider>
      {!isWelcome && <Header />}
      {children}
      {!isWelcome && <FloatingDonatePill />}
    </I18nProvider>
  );
}