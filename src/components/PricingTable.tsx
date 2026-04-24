import { siteConfig } from "@/config/site";

export default function PricingTable() {
  return (
    <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
      {/* Free tier */}
      <div className="rounded-2xl border border-white/15 p-8 text-center">
        <h3 className="text-sm font-semibold text-cyan">Free</h3>
        <p className="my-3 text-4xl font-extrabold">$0</p>
        <p className="text-xs text-text-secondary">forever</p>

        <ul className="mt-6 space-y-3 text-left text-sm text-text-secondary">
          <li>✓ Full match scoring</li>
          <li>✓ Digital Crown input</li>
          <li>✓ Always-On Display</li>
          <li>✓ Undo support</li>
          <li className="text-text-tertiary">✗ Match history</li>
          <li className="text-text-tertiary">✗ Cloud sync</li>
        </ul>

        <a
          href={siteConfig.appStoreUrl}
          className="mt-8 block rounded-full border border-cyan px-6 py-3 text-sm text-cyan transition-colors hover:bg-cyan/10"
        >
          Get Started
        </a>
      </div>

      {/* Noble tier */}
      <div className="relative rounded-2xl border-2 border-gold p-8 text-center">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[9px] font-bold text-navy">
          RECOMMENDED
        </span>
        <h3 className="text-sm font-semibold text-gold">Noble 👑</h3>
        <p className="my-3 text-4xl font-extrabold">{siteConfig.noblePrice}</p>
        <p className="text-xs text-text-secondary">one-time purchase</p>

        <ul className="mt-6 space-y-3 text-left text-sm text-text-secondary">
          <li>✓ Everything in Free</li>
          <li>✓ Full match history</li>
          <li>✓ Cloud sync</li>
          <li>✓ Player profiles</li>
          <li>✓ Statistics &amp; trends</li>
          <li>✓ Priority support</li>
        </ul>

        <a
          href={siteConfig.appStoreUrl}
          className="mt-8 block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-dark"
        >
          Upgrade to Noble
        </a>
      </div>
    </div>
  );
}
