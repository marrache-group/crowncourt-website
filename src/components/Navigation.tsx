"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/8 bg-navy/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="CrownCourt logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-[15px] font-bold">{siteConfig.name}</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/features"
            className="text-sm text-text-secondary transition-colors hover:text-white"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-text-secondary transition-colors hover:text-white"
          >
            Pricing
          </Link>
          <a
            href={siteConfig.appStoreUrl}
            className="rounded-full bg-gold px-5 py-2 text-xs font-semibold text-navy transition-colors hover:bg-gold-dark"
          >
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="border-t border-white/8 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/features"
              onClick={() => setIsOpen(false)}
              className="text-sm text-text-secondary transition-colors hover:text-white"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="text-sm text-text-secondary transition-colors hover:text-white"
            >
              Pricing
            </Link>
            <a
              href={siteConfig.appStoreUrl}
              className="inline-block rounded-full bg-gold px-5 py-2 text-center text-xs font-semibold text-navy"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
