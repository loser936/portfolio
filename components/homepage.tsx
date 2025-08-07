"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/FadeIn';
import { AnimatedTitle } from '@/components/ui/AnimatedTitle';
import { Socials } from '@/components/ui/Socials';  
import { Textarea } from './ui/textarea'; 
import { SendIcon } from "lucide-react";  
export function HeroSection() {
      const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSend = () => {
    if (!message.trim()) return;
    const encodedMessage = encodeURIComponent(message.trim());
    router.push(`/chatbot?message=${encodedMessage}`);
  };
  return (
    
      <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            <FadeIn className="max-w-5xl pt-10 md:pt-[20vh] 2xl:pt-[15vh] ">
              <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl ">
                Hi, I&apos;m <br />
                Oubeid Allah<span className="wave">👋</span>
              </h1>
              <div className="flex flex-col min-[800px]:flex-row mt-3 mb-1 text-base sm:text-lg items-start sm:items-center gap-1 sm:gap-2">
                  <div className="flex items-center">
                    Looking for a job{' '}
                    <span className="relative flex h-2 w-2 self-center mx-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>{' '}
                    /
                  </div>

                  {/* AnimatedTitle goes to next line on small screens */}
                  <div>
                    <AnimatedTitle />
                  </div>
              </div>

              <div className="mt-4 rounded-md bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-2 text-sm">
                🚧 This website is still under construction. More updates coming soon!
              </div>

            </FadeIn>

            <Socials />
            <div className="scroll-down">
              <span></span>
              <span></span>
              <span></span>
            </div>
            
            <div className="relative w-full max-w-4xl">
                <Textarea
                    placeholder="Ask me something..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full pr-14 min-h-[64px]" // pr-14 gives space for the button
                />

                <Button
                    type="submit"
                    size="icon"
                    onClick={handleSend}
                    disabled={!message.trim()}
                    className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <SendIcon className="w-5 h-5" />
                    <span className="sr-only">Send</span>
                </Button>
            </div>

            
      </div>
  

      
    
  );
}