import PageHero from "@/components/PageHero";
import ContactForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import MediaFrame from "@/components/MediaFrame";
import QuoteIllustration from "@/components/QuoteIllustration";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
    title: "Get a Quote",
    description:
        "Request a routed quote for vehicle transportation, haulage, or recovery — get a price from Tranzent within one business day.",
};

export default function QuotePage() {
    return (
        <>
            <PageHero
                eyebrow="Request a Quote"
                title="Request a quote to move your vehicle."
                copy="Let us know what you're moving, where it's headed, and your preferred schedule. We'll review the information and send you a route-specific quote within one business day."
            />

            <section className="relative isolate flex h-[340px] items-end overflow-hidden bg-ink-900 sm:h-[420px] lg:h-[480px]">
                <div className="absolute inset-0">
                    <MediaFrame
                        src="/images/quote/quote-request.jpg"
                        alt="Requesting a vehicle transport quote"
                        className="h-full w-full"
                        imgClassName="object-center animate-hero-zoom"
                        overlay="none"
                        fallback={<QuoteIllustration className="h-full w-full animate-hero-zoom" />}
                    />
                </div>

                {/* legibility scrim — same approach as your homepage hero */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/45 to-ink-900/10" />

                <div className="container-brand relative pb-10 sm:pb-12">
                    {/* <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-[10.5px] uppercase tracking-widest2 text-white backdrop-blur-sm">
                        Request a Quote
                    </span> */}
                    <p className="mt-3 max-w-md font-display text-xl font-semibold text-white drop-shadow-[0_2px_12px_rgba(11,20,36,0.5)] sm:text-2xl">
                        Share a few details today. We'll send you a routed quote within one business day.
                    </p>
                </div>
            </section>

            <section className="bg-paper py-24 sm:py-28">
                <div className="container-brand mx-auto max-w-2xl">
                    <Reveal>
                        <QuoteForm />
                    </Reveal>
                </div>
            </section>
        </>
    );
}