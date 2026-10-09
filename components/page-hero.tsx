import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { ChevronRight } from "lucide-react"

type Crumb = { href?: string; label: string }

/** Rounded, inset image hero used at the top of inner pages. */
export function PageHero({
  image,
  eyebrow,
  title,
  children,
  crumbs,
}: {
  image: string
  eyebrow?: string
  title: ReactNode
  children?: ReactNode
  crumbs?: Crumb[]
}) {
  return (
    <section className="px-3 pt-3 sm:px-5">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-deep sm:rounded-[2.5rem]">
        <Image src={image} alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/70 via-navy-deep/35 to-navy-deep/85" />
        <div className="container-x pt-36 pb-16 sm:pt-44 sm:pb-24">
          {crumbs && (
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-white/75">
                {crumbs.map((c, i) => (
                  <li key={c.label} className="flex items-center gap-1">
                    {i > 0 && <ChevronRight className="size-3.5" aria-hidden />}
                    {c.href ? (
                      <Link href={c.href} className="hover:text-white">
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-white">
                        {c.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {eyebrow && <p className="font-script text-2xl text-sun sm:text-3xl">{eyebrow}</p>}
          <h1 className="mt-2 max-w-4xl text-4xl leading-[1.02] font-extrabold text-white sm:text-6xl lg:text-7xl">{title}</h1>
          {children && <div className="mt-5 max-w-2xl text-lg text-white/85">{children}</div>}
        </div>
      </div>
    </section>
  )
}
