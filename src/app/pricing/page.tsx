import type { Metadata } from "next";
import PricingTable from "@/components/PricingTable";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "CrownCourt is free to use. Upgrade to Noble for match history, cloud sync, and player profiles.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="mb-2 text-[11px] font-medium tracking-[3px] text-gold">
          PRICING
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">Choose your game</h1>
      </div>

      <PricingTable />
    </div>
  );
}
