import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Clock, MessageCircle } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
import { site, whatsappUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting SMICK Tours & Safaris — your enquiry is on its way and we reply as quickly as we can.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
}

const steps = [
  { icon: MessageCircle, title: "Press send", text: "Your message is ready in WhatsApp or your email app — just hit send." },
  { icon: Clock, title: "We reply fast", text: "We reply as quickly as we can, Zanzibar time (EAT)." },
  { icon: CheckCircle2, title: "Get your plan", text: "You'll receive prices, pickup times and a written confirmation." },
]

export default function ThankYouPage() {
  return (
    <section className="px-3 pt-3 sm:px-5">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-deep sm:rounded-[2.5rem]">
        <Image src="/img/moments/sandbank-fruits.webp" alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-40" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/70 to-navy-deep/90" />
        <div className="container-x pt-36 pb-20 text-center sm:pt-44">
          <p className="font-script text-3xl text-sun">Asante sana!</p>
          <h1 className="mx-auto mt-2 max-w-3xl text-4xl leading-[1.05] font-extrabold text-white sm:text-6xl">
            Your enquiry is on its way
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            Didn&apos;t see WhatsApp open? Tap the button below and we&apos;ll pick it up from there.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={whatsappUrl(`Hi ${site.shortName}! I just sent an enquiry from your website.`)} target="_blank" rel="noopener noreferrer" className="btn-sun">
              <WhatsAppIcon className="size-5" /> Open WhatsApp
            </a>
            <Link href="/zanzibar-tours" className="btn-ghost-light">
              Keep exploring
            </Link>
          </div>
          <ol className="mx-auto mt-14 grid max-w-4xl gap-4 text-left sm:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-3xl bg-white/10 p-5 text-white ring-1 ring-white/15 backdrop-blur">
                <span className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-sun text-navy-deep">
                    <s.icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-display text-lg font-bold">
                    {i + 1}. {s.title}
                  </span>
                </span>
                <p className="mt-3 text-sm text-white/75">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
