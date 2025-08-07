"use client";

import React, { Suspense } from "react";
import { Chatbot } from "@/components/chatbot";
import HeaderMenu from "@/components/ui/header";

export default function ChatbotPage() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] min-h-screen px-4 sm:px-8 md:px-16 py-10 gap-6">
      {/* Top Social & Nav Icons */}
      <HeaderMenu />

      <main className="flex flex-col w-full max-w-screen-xl mx-auto gap-8 row-start-2 items-center sm:items-start px-2 sm:px-4">
        <Suspense fallback={<div>Loading Chatbot...</div>}>
          <Chatbot />
        </Suspense>
      </main>
    </div>
  );
}
