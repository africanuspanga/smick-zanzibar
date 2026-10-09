import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Booking Terms",
  description: `Booking terms and conditions for tours, transfers, packages and safaris with ${site.name}.`,
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <LegalPage title="Booking Terms" updated="9 October 2026">
      <p>
        These terms apply to excursions, transfers, holiday packages and safaris booked with {site.name}. By confirming a
        booking you agree to them. Your written booking confirmation (on WhatsApp or by email) forms part of these terms
        and takes priority if anything differs.
      </p>

      <h2>Enquiries and confirmation</h2>
      <p>
        Sending a form or message on this website is an enquiry, not a booking. A booking is confirmed only when we send
        you a written confirmation with the date, price and any payment details.
      </p>

      <h2>Prices</h2>
      <ul>
        <li>Prices are in US dollars and are per person unless stated as per vehicle or per group.</li>
        <li>Most excursion prices exclude hotel transport; we quote it separately based on where you stay.</li>
        <li>
          Prices listed on this website can change, for example when park fees, fuel or flight prices change. The price in
          your written confirmation is the price you pay.
        </li>
      </ul>

      <h2>Payment, changes and cancellation</h2>
      <p>
        Payment methods, any deposit and the cancellation terms for your trip are set out in your booking confirmation.
        Safaris, flights and accommodation can carry stricter conditions set by lodges, airlines and park authorities; we
        will tell you about these before you confirm. Please ask us if anything is unclear.
      </p>

      <h2>Weather, sea conditions and safety</h2>
      <p>
        Boat trips, snorkelling, water sports and some excursions depend on weather, tides and sea conditions. If we have
        to cancel or change an activity for safety, we will offer you another date or an alternative activity, or
        handle it as set out in your booking confirmation. Guides and crew may stop an activity if they consider it
        unsafe; please follow their instructions.
      </p>

      <h2>Wildlife</h2>
      <p>
        Dolphins, turtles and safari animals are wild. Sightings are common but can never be guaranteed, and no refund
        is due because a particular animal was not seen.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Be ready at the agreed pickup time and place.</li>
        <li>Tell us in advance about medical conditions, mobility needs, allergies or dietary requirements.</li>
        <li>Have valid travel documents, visas and any required vaccinations.</li>
        <li>We strongly recommend travel insurance that covers medical costs and cancellation.</li>
      </ul>

      <h2>Partners</h2>
      <p>
        Some services — such as flights, lodges, balloon flights and certain boats — are provided by trusted partners.
        Their own terms also apply to those services.
      </p>

      <h2>Questions</h2>
      <p>
        Contact us at <a href={`mailto:${site.email}`}>{site.email}</a> or on WhatsApp at{" "}
        <a href={site.phoneHref}>{site.phone}</a>.
      </p>
    </LegalPage>
  )
}
