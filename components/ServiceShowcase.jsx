import Link from "next/link";
import Reveal from "./Reveal";
import MediaFrame from "./MediaFrame";
import CarCarrierIllustration from "./CarCarrierIllustration";

const STEPS = [
  {
    id: "haulage",
    step: "01",
    title: "We transport your vehicle safely.",
    copy: "Open and enclosed carriers move your vehicle door to door, whether it is one car or a full dealer fleet.",
    href: "/services#transportation",
    cta: "View haulage services",
    image: "/images/about/car-carrier-loading-operation.png",
    alt: "Tranzent crew loading an SUV onto a car carrier at a vehicle yard",
    imgPosition: "object-[55%_50%]",
  },
  {
    id: "inspection",
    step: "02",
    title: "We check it at pickup and delivery.",
    copy: "We record the vehicle's condition when we collect it and again when we hand it over.",
    href: "/about",
    cta: "Learn how we work",
    image: "/images/about/car-inspection.png",
    alt: "Tranzent coordinator and car owner reviewing a vehicle condition report",
    imgPosition: "object-center",
  },
  {
    id: "coordination",
    step: "03",
    title: "One person handles your move.",
    copy: "A single coordinator manages your request and keeps you updated until the vehicle is delivered.",
    href: "/quote",
    cta: "Get a quote",
    image: "/images/about/coordinator-dispatch-yard.png",
    alt: "Tranzent coordinator checking a tablet on a phone call beside a parked SUV at a vehicle yard",
    imgPosition: "object-[50%_55%]",
  },
];

export default function ServiceShowcase() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <div className="container-brand">
        {/* header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="mt-5 max-w-xl font-display text-[30px] font-semibold leading-tight tracking-tightest text-ink-900 sm:text-[38px]">
                What you get when you move a vehicle with Tranzent.
              </h2>
            </div>
            <p className="max-w-md text-[15.5px] leading-relaxed text-ink-500">
              Three things we do on every job, from your first request to the final handover.
            </p>
          </div>
        </Reveal>

        {/* steps: stacked on phones, image-left rows on tablets, three columns on desktop */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.id} delay={i * 100}>
              <Link
                href={s.href}
                className="group block md:grid md:grid-cols-2 md:items-center md:gap-10 lg:block"
              >
                {/* photo */}
                <div className="relative overflow-hidden rounded-2xl shadow-card">
                  <MediaFrame
                    src={s.image}
                    alt={s.alt}
                    className="aspect-[4/3] w-full"
                    imgClassName={`${s.imgPosition} transition-transform duration-700 ease-signature group-hover:scale-105`}
                    overlay="none"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    fallback={<CarCarrierIllustration className="h-full w-full" />}
                  />
                  {/* <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-ink-900/70 px-3 py-1 font-mono text-[10.5px] uppercase tracking-widest2 text-white backdrop-blur-sm">
                    {s.tag}
                  </span> */}
                </div>

                {/* text */}
                <div className="mt-6 md:mt-0 lg:mt-7">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[12px] tracking-widest2 text-ink-300">{s.step}</span>
                    <span className="h-px flex-1 bg-line" />
                  </div>
                  <h3 className="mt-5 font-display text-[22px] font-semibold leading-snug text-ink-900 sm:text-[24px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-500">{s.copy}</p>

                  <span className="mt-6 inline-flex items-center gap-3 text-[14px] font-semibold text-ink-900 transition-colors duration-300 group-hover:text-primary-600">
                    {s.cta}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-inset ring-ink-900/15 transition-all duration-300 ease-signature group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                      <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
                        <path d="M2 12 12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}