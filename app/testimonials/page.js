import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
    title: "Testimonials",
    description:
        "Real feedback from Tranzent customers — written and video reviews, every one linked back to its original source.",
};

export default function TestimonialsPage() {
    return (
        <>
            <PageHero
                eyebrow="Testimonials"
                title="What our customers are saying."
                copy="Real people. Real vehicle deliveries. Hear directly from customers who’ve trusted Tranzent to get the job done. No scripts, no staged stories, just genuine experiences you can trace back to their source."
            />
            <TestimonialsSection showHeading={false} />
            <CTASection
                eyebrow="Join the standard"
                title="Move with a team that treats it like their own."
            />
        </>
    );
}