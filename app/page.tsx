import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { TutorialSection } from '@/components/tutorial-section'
import { FooterSection } from '@/components/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <FeaturesSection />
      <TutorialSection />
      <FooterSection />
    </main>
  )
}

