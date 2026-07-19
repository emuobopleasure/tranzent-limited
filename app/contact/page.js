import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import MediaFrame from "@/components/MediaFrame";
import CarCarrierIllustration from "@/components/CarCarrierIllustration";

export const metadata = {
  title: "Contact",
  description:
    "Request a quote or reach the Tranzent team — vehicle transportation, fleet logistics, and mobility consulting.",
};

const INFO = [
  {
    label: "Email",
    value: "tranzent.limited@gmail.com",
    href: "mailto:tranzent.limited@gmail.com",
    icon: (
      <path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1 2.4V17h14V6.4l-7 5.6-7-5.6ZM6.2 6l5.8 4.6L17.8 6H6.2Z" />
    ),
  },
  {
    label: "Phone",
    value: "+234 812 959 8167",
    href: "tel:+234 812 959 8167",
    icon: (
      <path d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2a1 1 0 0 1 1.1-.2 8.6 8.6 0 0 0 3 .5 1 1 0 0 1 1 1V19a1 1 0 0 1-1 1A16 16 0 0 1 3 4a1 1 0 0 1 1-1h2.9a1 1 0 0 1 1 1c0 1 .2 2 .5 3a1 1 0 0 1-.2 1.1l-1.6 1.7Z" />
    ),
  },
  {
  label: "WhatsApp",
  value: "+234 8107168919",
  href: "https://wa.me/2348107168919?text=Hi%20Tranzent%2C%20I%27d%20like%20to%20enquire%20about%20a%20delivery.",
  icon: (
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.83L2 22l5.36-1.4c1.38.75 2.96 1.18 4.66 1.18h.02c5.46 0 9.91-4.45 9.91-9.91 0-2.64-1.03-5.13-2.91-7C17.14 3.03 14.65 2 12.04 2Zm.01 1.67c2.21 0 4.28.86 5.84 2.42a8.19 8.19 0 0 1 2.42 5.83c0 4.55-3.71 8.25-8.27 8.25a8.27 8.27 0 0 1-4.19-1.14l-.3-.18-3.18.83.85-3.1-.2-.32a8.2 8.2 0 0 1-1.27-4.38c0-4.56 3.71-8.21 8.3-8.21Zm-3.72 4.6c-.15 0-.4.06-.61.29-.21.24-.8.78-.8 1.9s.82 2.21.94 2.36c.11.15 1.59 2.52 3.9 3.44 1.92.76 2.31.6 2.73.57.42-.04 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.15-.44-.27-.23-.11-1.34-.66-1.55-.74-.21-.08-.36-.11-.51.12-.15.23-.58.74-.71.89-.13.15-.26.17-.49.06-.23-.11-.96-.36-1.83-1.14-.68-.6-1.13-1.35-1.27-1.58-.13-.23-.01-.35.1-.47.11-.11.23-.27.35-.4.11-.13.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.11-.51-1.26-.72-1.72-.19-.44-.38-.38-.51-.39-.13-.01-.28-.01-.43-.01Z" />
  ),
},
  {
    label: "Headquarters",
    value: "Abuja, Nigeria - Plot 809, A-Close, 64 Crescent, Gwarinpa, Abuja.",
    href: null,
    icon: (
      <path d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    ),
  },
  {
    label: "Response Hours",
    value: "Mon – Sun, 8:00am – 7:00pm WAT",
    href: null,
    icon: (
      <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm.75-15h-1.5v6l5.25 3.15.75-1.23-4.5-2.67V7Z" />
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us what needs to move."
        copy="Share a few details and we'll respond with a routed quote within one business day, no call required to get started."
      />

      <section className="bg-paper py-24 sm:py-28">
        <div className="container-brand grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal>
            <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-charcoal">
              <MediaFrame
                src="/images/contact/contact2.jpg"
                alt="Tranzent car carrier truck loaded with vehicles"
                className="h-48 w-full sm:h-56 opacity-60"
                imgClassName="object-[center_55%]"
                overlay="none"
                fallback={<CarCarrierIllustration className="h-full w-full" />}
              />

              <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    Prefer to speak with someone directly?
                  </h2>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-white/55">
                    Our team is reachable across every channel below. <br/>For
                    urgent pickups, mention it in your message and we'll
                    prioritise your inquiry.
                  </p>
                </div>

                <ul className="mt-10 flex flex-col gap-6">
                  {INFO.map((item) => {
                    const Wrapper = item.href ? "a" : "div";
                    return (
                      <li key={item.label}>
                        <Wrapper
                          href={item.href || undefined}
                          className={`flex items-start gap-4 ${item.href ? "group" : ""}`}
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary-300 transition-colors duration-300 ease-signature group-hover:bg-primary/15 group-hover:text-primary">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              {item.icon}
                            </svg>
                          </span>
                          <span>
                            <span className="block font-mono text-[10.5px] uppercase tracking-widest2 text-white/50">
                              {item.label}
                            </span>
                            <span className="mt-1 block text-[14.5px] text-white/85 transition-colors duration-300 ease-signature group-hover:text-primary-300">
                              {item.value}
                            </span>
                          </span>
                        </Wrapper>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
