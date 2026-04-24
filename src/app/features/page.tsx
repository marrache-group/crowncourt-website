import type { Metadata } from "next";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore CrownCourt features — Digital Crown scoring, full match engine, iOS companion, Always-On Display, and more.",
};

const features = [
  {
    icon: "👑",
    title: "Digital Crown Scoring",
    description:
      "Counter-clockwise for your points, clockwise for your opponent. Built-in haptic feedback confirms every score change. A cooldown prevents accidental inputs.",
    accentColor: "cyan" as const,
  },
  {
    icon: "🎾",
    title: "Complete Scoring Engine",
    description:
      "Best of 1, 3, or 5 sets. Automatic tiebreak at 6-6. Deuce and advantage tracking. Serve rotation. Full undo support with a double-tap gesture.",
    accentColor: "gold" as const,
  },
  {
    icon: "📱",
    title: "iOS Companion",
    description:
      "View your complete match history, manage your player profile and UTR rating, and sync everything automatically between your Watch and iPhone.",
    accentColor: "lime" as const,
  },
  {
    icon: "🌙",
    title: "Always-On Display",
    description:
      "A dimmed, OLED-optimized score view keeps the current score visible when your wrist is down. Never lose track mid-rally.",
    accentColor: "cyan" as const,
  },
  {
    icon: "❤️",
    title: "HealthKit Workout Tracking",
    description:
      "Runs as a foreground workout session on watchOS. Track your tennis activity alongside your other workouts in Apple Health.",
    accentColor: "gold" as const,
  },
  {
    icon: "☁️",
    title: "Offline Support",
    description:
      "Play without a connection. Completed matches are saved locally and synced to the cloud when you're back online.",
    accentColor: "lime" as const,
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="mb-2 text-[11px] font-medium tracking-[3px] text-gold">
          FEATURES
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Everything you need on the court
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}
