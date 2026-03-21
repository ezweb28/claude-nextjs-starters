import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

// 공개 페이지 레이아웃: 상단 Header + 콘텐츠 + 하단 Footer
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100svh-4rem)]">{children}</main>
      <Footer />
    </>
  )
}
