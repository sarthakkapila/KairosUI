/* eslint-disable react/no-unescaped-entities */

import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { dark, neobrutalism } from '@clerk/themes';
export default function Signin() {
  return (
    <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Content */}
      <div className="text-center text-white z-10 w-full max-w-md">
        {/* Logo */}
        <div className="mb-6">
          <Image src="/dark.ico" alt="KairosUI" width={50} height={50} className="h-12 mx-auto" />
          <p></p>
        </div>
        
        {/* Titles */}
        <h1 className="text-4xl font-bold mb-2">Hi, I'm KairosUI!</h1>
        <h2 className="text-2xl mb-8">AI Frontend Developer</h2>
        
        {/* Sign-in box */}
        <div className="text-white backdrop-blur-md rounded-lg p-8">
          <SignIn
            appearance={{
              baseTheme: dark,
              elements: {
                rootBox: "shadow-none bg-transparent",
                card: "shadow-none bg-transparent",
                headerSubtitle: "hidden",
                footerAction: "hidden",
                formButtonPrimary: "bg-white text-black hover:bg-gray-200",
                formFieldInput: "bg-white/20 border-white/30 text-white placeholder-white/50",
                dividerLine: "bg-white/30",
                dividerText: "text-white/70",
                logoBox: "hidden",
                footer: "hidden",
                socialButtonsBlockButton: "bg-white text-black hover:bg-gray-200",
                socialButtonsBlockButtonText: "text-black",
              },
            }}
          />
          <div className="mt-4 text-center">
            <p className="text-sm text-white font-thin">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="font-medium text-blue-400 hover:text-blue-300">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
