import { WhatsAppIcon } from "@/components/icons"
import { site, whatsappUrl } from "@/lib/site"

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(`Hi ${site.shortName}! I have a question about a trip.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="wa-float fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-110 sm:right-6 sm:bottom-6 sm:size-16"
    >
      <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
      <WhatsAppIcon className="relative size-7 sm:size-8" />
    </a>
  )
}
