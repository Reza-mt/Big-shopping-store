"use client";

import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import ReduxProvider from "@/store/provider";
import { Providers } from "./providers";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import ThemeSwitcher from "../components/utils/themeSwitcher";
import { Toaster } from "sonner";

export default function GlobalProviders({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <SessionProvider>
      <ReduxProvider>
        <Providers>
          <ProgressBar
            height="4px"
            color="#00AFC1"
            options={{ showSpinner: false }}
            shallowRouting
          />
          {mounted && <ThemeSwitcher />}
          {children}
        </Providers>
        <Toaster richColors />
      </ReduxProvider>
    </SessionProvider>
  );
}