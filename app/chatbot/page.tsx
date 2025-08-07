"use client";

import React, { Suspense } from "react";
import { Chatbot } from "@/components/chatbot";
import HeaderMenu from "@/components/ui/header";

export default function ChatbotPage() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] max-h-screen px-0 sm:px-8 md:px-16 pt-12 sm:py-10 gap-6 overflow-hidden fixed top-0 left-0 right-0 bottom-0">
      {/* Top Social & Nav Icons */}
      <HeaderMenu />

      <main className="flex flex-col w-full max-w-screen-xl mx-auto gap-8 row-start-2 items-center sm:items-start px-4 mt-2 sm:mt-0 max-h-full overflow-hidden">
        <Suspense fallback={<div>Loading Chatbot...</div>}>
          <Chatbot />
        </Suspense>
      </main>
    </div>
  );
}
