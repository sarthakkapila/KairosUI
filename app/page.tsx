/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Blobs from '@/components/landing/Blobs';
import Globe from '@/components/landing/Globe';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
function LandingPage() {
  const router = useRouter();
  const { user } = useUser();
  return (

    <div className="relative h-screen">
      <div className="absolute flex max-h-screen h-full overflow-hidden items-center justify-center w-full -z-10 blur-xl">
        <Blobs />
      </div>
      <div className="absolute flex min-h-screen items-start justify-center w-full -z-10">
      </div> 
<UserButton
      appearance={ {
          
        baseTheme: dark,
        elements: {
          avatarBox: "h-8 w-8",
          userButtonOuterIdentifier: "text-sm font-semibold text-white",
          userButtonPopoverCard: "bg-white shadow-lg rounded-lg border border-gray-200",
          userButtonPopoverFooter: "hidden",
        },
      }}
      showName={false}
    />

      <main className="min-h-screen flex flex-col items-center justify-between p-4 md:p-24">
        <div className=" max-w-5xl w-full justify-between font-mono text-sm lg:flex">
          <div className="flex text-white p-4 flex-col gap-4 w-full lg:flex-row lg:items-center lg:justify-between">
            <a
              href="https://github.com/sarthakkapila/KairosUI"
              className="flex items-center justify-between gap-4 border-b border-gray-300 pb-6 pt-4 lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0"
            >
              Open source{' '}
              <svg
                viewBox="0 0 256 250"
                width="30"
                height="30"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
              </svg>
            </a>
          </div>
          <div className="fixed text-white bottom-0 left-0 flex flex-col gap-4 h-54 w-screen  justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center items-center justify-center gap-2 p-8 lg:pointer-events-auto lg:p-0 font-sans text-lg"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Built by{''}
              <Image
                src="/light.ico"
                alt="KairosUI Logo"
                className="invert dark:invert-0"
                width={30}
                height={30}
                priority
              />{' '}
              Sarthak Kapilaツ
            </a>
          </div>
        </div>
          <div className="pb-32 text-6xl font-bold  text-neon-pink font-mono">
          KairosUI
          </div>
        <div>
<button className="bg-neon-pink no-underline group cursor-pointer relative shadow-2xl shadow-neon-pink rounded-full p-px text-base font-semibold leading-6 text-white inline-block"
        onClick={()=> {
              router.push('/code')
            }}>
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-3 items-center z-10 rounded-full bg-zinc-950 py-1.5 px-6 ring-1 ring-white/10 ">
    <span>
      Try Now!
    </span>
    <svg
      fill="none"
      height="40"
      viewBox="0 0 24 24"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.5rem] h-px w-[calc(100%-3rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
