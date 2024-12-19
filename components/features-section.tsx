'use client'

import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({ subsets: ['latin'] })

export function FeaturesSection() {
  return (
    <section id='features' className={`relative py-20 overflow-hidden -mt-10 ${urbanist.className} bg-[#0D0D0D]`}>
      <div className="h-[50px] sm:h-[200px] sm:mt-[50px]">
      <div className=" absolute w-screen">
        <Marquee direction="right" className="bg-white p-2 border-black border-y-[8px] text-3xl font-bold">
          <h1 className='mx-24 text-black '>FEATURES</h1>
          <h1 className='mx-24  text-black'>FEATURES</h1>
          <h1 className='mx-24 text-black'>FEATURES</h1>
          <h1 className='mx-24 text-black'>FEATURES</h1>
          <h1 className='mx-24 text-black'>FEATURES</h1>
          <h1 className='mx-24 text-black'>FEATURES</h1>
        </Marquee>
      </div>
        
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Your Winning Team in Under 10 Seconds"
          description="Experience Next-Gen Match Creation And Optimal Team Predictions. Almost Instantly, So You Can Focus On Winning While We Do The Hard Work."
        />
        <FeatureCard
          title="Precision You Can Count On"
          description="Perfect Match Data Analysis And Performance History With Unparalleled Accuracy To Maximize Your Chances Of Success."
        />
        <FeatureCard
          title="Your Fantasy Assistant"
          description="Instant Updates & Real-Time Match Creation Fast, Engaging, And Enjoyable With Dynamic Recommendations And Real-Time Feedback."
        />
      </div>
      <div className="h-[10px] sm:h-[50px] sm:mt-[50px]">
      <div className="absolute w-screen">
        <Marquee direction="right" className="bg-[#0D0D0D] p-2 border-white border-y-[8px] text-3xl font-bold -ml-2 mt-14">
          <h1 className='mx-24 text-white '>HOW DOES IT WORK?</h1>
          <h1 className='mx-24 text-white'>HOW DOES IT WORK?</h1>
          <h1 className='mx-24 text-white'>HOW DOES IT WORK?</h1>
          <h1 className='mx-24 text-white'>HOW DOES IT WORK?</h1>
          <h1 className='mx-24 text-white'>HOW DOES IT WORK?</h1>
          <h1 className='mx-24 text-white'>HOW DOES IT WORK?</h1>
        </Marquee>
      </div>
        
      </div>
    </section>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      className="p-6 rounded-lg bg-[#33101A]/10 hover:bg-[#33101A]/20 transition-colors"
      whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

