"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline";
import { Play } from "lucide-react";
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({ subsets: ['latin'] })


export function HeroSection() {
  const scrollToTutorial = () => {
    document.getElementById("tutorial")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={`relative min-h-screen flex flex-col items-center justify-center px-4 mt-20 ${urbanist.className}`}>
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/GBXnlYyLwloLx7PV/scene.splinecode" />
      </div>

      <div className="absolute z-10 text-left top-8 w-10/12 md:w-3/4">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-2xl -mb-10 ml-4 text-[#FFF4F7] pl-4">Meet</span>
          <h1 className="text-[120px] font-extrabold text-white tracking-wider transform -skew-x-8" style={{letterSpacing: '-2px'}}>
             <span className="italic">EDGE</span> 11
          </h1>
        </motion.div>
        <motion.p
          className="text-xl text-gray-300 pl-24 -mt-8 -ml-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your AI Fantasy Team Strategist
        </motion.p>
        <div className="w-full flex justify-end -ml-24">
          <motion.p
            className="w-[300px] text-gray-400 pt-12 lg:pt-24
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Unleash the power of AI to create your perfect team. Let Edge 11 predict the best XI players for any match, maximizing your chances to win big.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="absolute right-12 sm:right-24 lg:right-48 bottom-12 md:bottom-48 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        onClick={scrollToTutorial}
      >
        <Button
          
          className="w-20 h-20 rounded-full bg-white hover:bg-white/90 relative"
        >
          <Play className="h-10 w-10 text-[#33101A]" />
        </Button>
        <CircularText />
      </motion.div>

      {/* Abstract lines */}
      <div className="absolute left-0 top-1/4 w-[200px] h-[2px] bg-gradient-to-r from-[#33101A] to-transparent" />
      <div className="absolute right-0 bottom-1/4 w-[200px] h-[2px] bg-gradient-to-l from-[#33101A] to-transparent" />
    </section>
  );
}

function CircularText() {
  return (
    <div className="absolute -inset-10">
      <svg viewBox="0 0 100 100" className="w-40 h-40 animate-spin-slow">
        <defs>
          <path
            id="circle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text fontSize="9" fill="white">
          <textPath xlinkHref="#circle">
            Watch our tutorial • Watch our tutorial • Watch our tutorial &nbsp; •
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default HeroSection;
