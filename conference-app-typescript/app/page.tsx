import { ThemeProvider } from "@/app/theme-context";
import Header from "@/app/header";
import SpeakersPage from "@/app/speakers/speakers-page";
import { Suspense } from "react";
import SpeakersPageFallback from "@/app/speakers/speakers-page-fallback";
import { useState } from 'react';

export default async function Pagex() {
  return (
    <ThemeProvider>
      <Header />
      <Suspense fallback={<SpeakersPageFallback />}>
        <SpeakersPage />
      </Suspense>
    </ThemeProvider>
  );
}

