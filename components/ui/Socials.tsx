'use client';

import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { Resume } from '../resume'; 
import { FileText, X } from 'lucide-react';

export function LinkedinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"></path>
    </svg>
  );
}

export function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

export function LeetCodeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" {...props}>
      <path
        fill="#FFA116"
        d="M122.8 256c0-32.9 13.1-64.4 36.5-87.9L232.5 94c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L87.9 148.5C48.8 187.6 26 240.5 26 296s22.8 108.4 61.9 147.5l99.3 99.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-73.2-73.2C135.9 320.4 122.8 288.9 122.8 256z"
      />
      <path
        fill="#030303ff"
        d="M485.9 256c0 61.3-26.4 120.5-72.4 162.2-12.9 11.8-32.9 10.9-44.7-2s-10.9-32.9 2-44.7c30.7-28.1 48.1-67.9 48.1-108.6s-17.3-80.5-48.1-108.6L273.4 59.5c-11.7-12-11.1-31.1 1.3-42.6 12.4-11.5 31.4-10.9 42.6 1.3l99.3 99.3c46 41.7 72.3 100.9 72.3 162.2z"
      />
      <path
        fill="#B3B3B3"
        d="M364.4 317.9H174.8c-17.7 0-32-14.3-32-32s14.3-32 32-32h189.6c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
      />
    </svg>
  );
}

export const socialMediaProfiles = [
  { title: 'Linkedin', href: 'https://www.linkedin.com/in/jalejandrogomeze/', icon: LinkedinIcon },
  { title: 'GitHub', href: 'https://github.com/AlejandroGomezE', icon: GitHubIcon },
  { title: 'LeetCode', href: 'https://leetcode.com/AlejandroGomezE/', icon: LeetCodeIcon },
];

export function Socials({ className }: { className?: string; invert?: boolean }) {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <FadeInStagger role="list" className={clsx('flex gap-x-4 text-blue-600 mt-1', className)}>
        {socialMediaProfiles.map((socialMediaProfile) => (
          <FadeIn key={socialMediaProfile.title}>
            <Link
              href={socialMediaProfile.href}
              target="_blank"
              aria-label={socialMediaProfile.title}
              className="transition hover:text-blue-400/80 duration-200"
            >
              <socialMediaProfile.icon className="h-8 w-8 fill-current" />
            </Link>
          </FadeIn>
        ))}

        {/* Resume Button */}
      <FadeIn>
        <button
          onClick={() => setShowResume(true)}
          className="group relative px-5 py-2 right-0 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          <span className="flex items-center gap-2 z-10 relative">
            <FileText className="w-5 h-5" />
            View Resume
          </span>
          
        </button>
      </FadeIn>
      </FadeInStagger>

      

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-xl overflow-y-auto p-6">
            
            <Resume />
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
              aria-label="Close resume"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
