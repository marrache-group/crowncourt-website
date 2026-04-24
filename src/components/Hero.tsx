import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 py-20 text-center">
      <p className="mb-4 text-[11px] font-medium tracking-[3px] text-gold">
        CROWNCOURT
      </p>

      {/* App logo */}
      <div className="mb-8">
        <Image
          src="/images/app-icon.png"
          alt="CrownCourt app icon"
          width={128}
          height={128}
          className="rounded-[28px] shadow-lg shadow-cyan/20"
          priority
        />
      </div>

      <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
        Score tennis.
        <br />
        From your wrist.
      </h1>

      <p className="mb-8 max-w-md text-sm leading-relaxed text-text-secondary">
        Digital Crown scoring. Always-on display. Zero phone needed. The
        ultimate tennis companion for Apple Watch.
      </p>

      <div className="flex gap-3">
        <a
          href={siteConfig.appStoreUrl}
          className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-dark"
        >
          Download
        </a>
        <Link
          href="/features"
          className="rounded-full border border-white/30 px-7 py-3 text-sm transition-colors hover:border-white/50 hover:bg-white/5"
        >
          Features
        </Link>
      </div>
    </section>
  );
}
