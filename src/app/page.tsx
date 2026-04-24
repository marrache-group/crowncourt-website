import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Feature highlights */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            icon="👑"
            title="Digital Crown"
            description="Score points with a twist of the crown. Intuitive haptic feedback on every point."
            accentColor="cyan"
          />
          <FeatureCard
            icon="🎾"
            title="Full Scoring"
            description="Best of 1, 3, or 5 sets. Tiebreaks, deuce, advantage — all handled automatically."
            accentColor="gold"
          />
          <FeatureCard
            icon="📱"
            title="iOS Companion"
            description="Match history, player profiles, and UTR ratings. Syncs seamlessly with your Watch."
            accentColor="lime"
          />
        </div>
      </section>

      {/* CTA section */}
      <section className="border-t border-white/8 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to play?</h2>
        <p className="mx-auto mb-8 max-w-md text-sm text-text-secondary">
          Download CrownCourt and start scoring your matches from your wrist.
          Free to get started.
        </p>
        <div className="flex justify-center gap-3">
          <a
            href={siteConfig.appStoreUrl}
            className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-dark"
          >
            Download Free
          </a>
          <Link
            href="/pricing"
            className="rounded-full border border-white/30 px-7 py-3 text-sm transition-colors hover:border-white/50 hover:bg-white/5"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </>
  );
}
