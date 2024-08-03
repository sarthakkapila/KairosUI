import Image from "next/image";
import React from "react";

import AppHead from "../../components/AppHead";
import FooterLinks from "../../components/landing/FooterLinks";
import Hero from "../../components/landing/Hero";
import FadeIn from "../../components/motions/FadeIn";
import Navbar from "../../components/NavBar";
const HomePage = () => {
  return (
    <div className="min-w-screen mx-6 grid min-h-screen place-items-center bg-black py-2 selection:bg-purple-700/25 lg:overflow-x-hidden lg:overflow-y-hidden">
      <AppHead
        title="Reworkd"
        ogTitle="Automate core business workflows with the help of AI Agents"
      />
      <div className="absolute -z-50  h-full w-full bg-black" />
      <Image src="/stars.svg" alt="stars" fill className="pointer-events-none absolute invert-0" />
        {/* <Navbar/> */}
      <div className="flex h-full max-w-[1440px] flex-col justify-between">
        <main className="mx-auto sm:px-16">
          <Hero />
        </main>
        {/* <FadeIn initialY={30} duration={3}> */}
          <footer className="flex flex-col items-end place-items-end gap-2 pb-4 lg:flex-row">
            <FooterLinks />
            <div className="font-inter text-xs font-normal text-white/30 lg:order-first lg:text-sm">
              &copy; KAIROSUI.
            </div>
          </footer>
        {/* </FadeIn> */}
      </div>
    </div>
  );
};

export default HomePage;