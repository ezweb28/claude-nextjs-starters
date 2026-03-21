import Link from "next/link"
import { Github, Zap } from "lucide-react"
import { Separator } from "@/components/ui/separator"

// 푸터 링크 그룹 정의
const FOOTER_LINKS = {
  제품: [
    { label: "기능", href: "/#features" },
    { label: "About", href: "/about" },
  ],
  개발: [
    { label: "GitHub", href: "https://github.com", external: true },
    { label: "Next.js 문서", href: "https://nextjs.org/docs", external: true },
    { label: "shadcn/ui", href: "https://ui.shadcn.com", external: true },
  ],
} as const

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        {/* 상단: 로고 + 링크 그룹 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 로고 & 설명 */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="size-5 text-primary" />
              <span className="font-semibold">Starter Kit</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Next.js + TypeScript + Tailwind CSS + shadcn/ui 기반<br />
              프로덕션 준비가 된 모던 웹 스타터킷
            </p>
          </div>

          {/* 링크 그룹 */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group} className="space-y-3">
              <h4 className="text-sm font-semibold">{group}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* 하단: 카피라이트 & 소셜 링크 */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Starter Kit. All rights reserved.
          </p>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
