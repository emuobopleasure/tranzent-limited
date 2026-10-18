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
                copy="Written and video reviews from people who've actually moved a vehicle with Tranzent, nothing staged, every one linked back to where it came from."
            />
            <TestimonialsSection showHeading={false} />
            <CTASection
                eyebrow="Join the standard"
                title="Move with a team that treats it like their own."
            />
        </>
    );
}