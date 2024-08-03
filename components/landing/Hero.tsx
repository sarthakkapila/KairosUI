"use client"
import Spline from "@splinetool/react-spline";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import type { FC } from "react";
import { Suspense, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BannerBadge from "../BannerBadge";
import GlowWrapper from "../GlowWrapper";
import HeroCard from "../HeroCard";
import FadeIn from "../motions/FadeIn";
import PrimaryButton from "../PrimaryButton";

const Hero: FC<{ className?: string }> = ({ className }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const totalCards = roles.length;
  const [showVideo, setShowVideo] = useState(false);

  const handleWindowResize = () => {
    setShowVideo(window.innerWidth <= 768);
  };

  const handleSliderButtonLeft = (decrement: number) => {
    if (sliderIndex != 0) {
      const newIndex = (sliderIndex - decrement + totalCards) % totalCards;
      setSliderIndex(newIndex);
    }
  };

  const handleSliderButtonRight = (increment: number) => {
    if (sliderIndex != roles.length - 2) {
      const newIndex = (sliderIndex + increment + totalCards) % totalCards;
      setSliderIndex(newIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <FadeIn
      delay={0.75}
      duration={3}
      className={clsx("grid grid-cols-1 place-items-center gap-2 md:grid-cols-2", className)}
    >
      <div className="relative z-30 flex h-full w-full justify-center md:flex md:h-[30vw] md:w-[30vw]">
        <div className="absolute -z-10 h-full w-full bg-neon-pink to-70% opacity-25" />
        {showVideo ? (
          <Image
            src="/prod_square.png"
            alt="A 3D blob that seems to represent most AI companies"
            width="500"
            height="500"
            className="w-52"
          />
        ) : (
          <Suspense>
            <Spline
              scene="https://draft.spline.design/n2h-XebGYJ95sdSw/scene.splinecode"
              className="hidden md:flex"
            />
          </Suspense>
        )}
      </div>
      <div className="relative z-10 col-span-1 max-w-full md:order-first">
        <div className="relative flex flex-col items-center gap-4 md:items-start md:gap-12">
          <BannerBadge
            href="https://forms.gle/E7rNShEAMfkxrX8z5"
            target="_blank"
            className="hidden md:flex"
          >
            <span className="tracking-wider text-gray-300">Powered by ShadCN & AceternityUI</span>
          </BannerBadge>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="resend-font-effect-hero bg-gradient-to-br from-white to-white/30 bg-clip-text pb-2 text-center text-5xl font-normal tracking-[.09rem] text-transparent md:text-left md:text-5xl lg:text-6xl xl:text-7xl">
              <div>
                <span className="bg-neon-pink bg-clip-text text-transparent">
                  Generate UI Components
                </span>{" "}
                <span className="bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent">
                  Using AI.
                  <br />
                </span>
              </div>
            </h1>
            <p className="my-3 inline-block bg-gradient-to-r from-white via-white via-50% to-neutral-500 bg-clip-text text-center align-top font-inter font-[400] leading-[24px] tracking-[.08rem] text-transparent sm:w-4/5 md:text-left">
            AI-Driven UIs That Elevate Your User Experience.
            </p>
          </div>

          <div className="relative hidden w-full items-center sm:max-w-[40em] md:flex">
            <button
              onClick={() => handleSliderButtonLeft(1)}
              className="group absolute left-0 z-30 flex h-6 w-8 -translate-x-5 items-center justify-center rounded-full border border-white/20 bg-black bg-gradient-to-r from-white/10 to-black opacity-75 hover:border-white/30"
            >
              <FaChevronLeft
                size={10}
                className="text-gray-400 transition-transform group-hover:translate-x-0.5"
              />
            </button>
            <div className="relative hidden w-full items-center overflow-hidden sm:max-w-[40em] md:flex">
              <motion.div
                className="z-20 flex gap-5"
                animate={{ x: `${sliderIndex * -308}px` }}
                transition={{ duration: 0.5, type: "spring", stiffness: 60 }}
              >
                {roles.map((role, index) => (
                  <HeroCard
                    key={role.title}
                    title={role.title}
                    subtitle={role.subtitle}
                    leftIcon={role.icon}
                  />
                ))}
              </motion.div>
            </div>
            <div className="absolute left-0 z-20 h-full w-6 -translate-x-0.5 bg-gradient-to-l from-transparent to-black" />
            <div className="absolute right-0 z-20 h-full w-40 translate-x-0.5 bg-gradient-to-r from-transparent to-black to-75%" />
            <button
              onClick={() => handleSliderButtonRight(1)}
              className="group absolute right-10 z-30 flex h-6 w-8 items-center justify-center rounded-full border border-white/20 bg-black bg-gradient-to-r from-white/10 to-black opacity-75 hover:border-white/30"
            >
              <FaChevronRight
                size={10}
                className="text-gray-400 transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
            <GlowWrapper>
              <PrimaryButton
                icon={<Image src="email-24x24.svg" width="24" height="24" alt="Email" />}
                onClick={() => {
                  window.open("https://forms.gle/E7rNShEAMfkxrX8z5", "_blank");
                }}
              >
                <>
                  <span className="py-2 font-medium">Try Now!</span>
                  <FaChevronRight
                    size="10"
                    className="text-gray-400 transition-transform group-hover:translate-x-1"
                  />
                </>
              </PrimaryButton>
            </GlowWrapper>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const roles = [
  {
    title: "Navigation Menu",
    subtitle: "Create a beautiful Navbar",
    icon: "📊",
  },
  {
    title: "Dashboard",
    subtitle: "Create a dashboard for a CRM",
    icon: "📈",
  },
  {
    title: "Recruiting",
    subtitle: "Create a job listing page",
    icon: "👩‍💼",
  },
  {
    title: "3D components",
    subtitle: "Create 3D components for a website",
    icon: "🌐",
  },
  {
    title: "Landing Page",
    subtitle: "Create a landing page for a startup",
    icon: "🚀",
  },
];

export default Hero;
