import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { CtaSection } from "@/components/landing/cta-section"

// 공개 랜딩 페이지: Hero → Features → CTA 섹션 조합
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </>
  )
}
