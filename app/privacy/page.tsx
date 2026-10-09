import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles the personal information you share when you enquire or book a tour.`,
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="9 October 2026">
      <p>
        This policy explains what personal information {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects when you use{" "}
        <a href={site.url}>smickzanzibar.com</a> or contact us, and how we use it.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Enquiry details you choose to send</strong> — such as your name, email, phone number, travel dates,
          number of guests, hotel and any notes.
        </li>
        <li>
          <strong>Booking details</strong> we need to run your trip — for example flight times for pickups, or passport
          names required by national parks and domestic airlines.
        </li>
        <li>
          <strong>Basic usage data</strong> — only if you accept analytics cookies (see below).
        </li>
      </ul>

      <h2>How our forms work</h2>
      <p>
        The booking and contact forms on this website do not store your details on our servers. When you press
        &ldquo;Send&rdquo;, your message is prepared in WhatsApp or your email app, and nothing is sent until you send it
        there. WhatsApp is operated by Meta and email by your own provider; their privacy policies apply to those
        services.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To reply to your enquiry and prepare quotes.</li>
        <li>To arrange and run your tours, transfers and safaris, including sharing necessary details with partners such as lodges, park authorities, boat crews and airlines.</li>
        <li>To meet legal, tax and accounting obligations.</li>
      </ul>
      <p>We do not sell your personal information, and we do not send marketing messages unless you ask us to.</p>

      <h2>Cookies and analytics</h2>
      <p>
        This site works without cookies. If we use analytics to understand which pages are popular, it only loads after
        you click &ldquo;Accept&rdquo; on the cookie banner, and you can decline. The map on our contact page is provided
        by Google Maps, which may set its own cookies when it loads.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry and booking conversations for as long as needed to provide your trip and meet our legal
        obligations, then delete them.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us at any time to see, correct or delete the personal information we hold about you. Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or message us on WhatsApp at{" "}
        <a href={site.phoneHref}>{site.phone}</a>.
      </p>

      <h2>Contact</h2>
      <p>
        {site.name}, {site.location}. Email: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  )
}
