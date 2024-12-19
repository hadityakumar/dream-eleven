'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Urbanist } from 'next/font/google'
import VideoPlayer from './VideoPlayer'

const urbanist = Urbanist({ subsets: ['latin'] })



export function TutorialSection() {
  return (
    <section id="tutorial" className={`relative bg-white text-black py-14 ${urbanist.className}`}>
      <div className='flex flex-col items-center'>
      <h1 className="text-4xl md:text-5xl font-bold text-[#33101A] mb-4">
          Learn How Edge 11 Works
        </h1>
        
      
      <VideoPlayer/>
      </div>
      
      <div className="container mx-auto px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-6xl font-bold mb-16">
            Create contest winning<br />
            team in <span className="italic font-light">three</span> <span className="text-[#33101A]">simple steps</span>
          </h2>
          <div className="grid md:grid-cols-5  spa">
            <Step number="" text="" />
            <Step number="01" text="Select Date And Teams" />
            <Step number="02" text="Select Players" />
            <Step number="03" text="Get Your Dream Team" />
            <Step number="" text="" />
          </div>
          
          <Button className="mt-12 bg-[#33101A] hover:bg-[#33101A]/90 text-white">
            Get Your Dream Team Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-4">{number}</div>
      <p className="text-base">{text}</p>
    </div>
  )
}

