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
    label: "Headquarters",
    value: "Abuja, Nigeria - Plot 809, A-Close, 64 Crescent, Gwarinpa, Abuja.",
    href: null,
    icon: (
      <path d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    ),
  },
  {
    label: "Response Hours",
    value: "Mon – Sat, 8:00am – 7:00pm WAT",
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
