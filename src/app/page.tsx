import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { BenefitsSection } from '@/components/benefits-section'
import { BeforeAfterSection } from '@/components/before-after-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}