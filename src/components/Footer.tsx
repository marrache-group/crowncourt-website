import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#12152a]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="CrownCourt logo"
                width={24}
                height={24}
                className="rounded-[5px]"
              />
              <span className="text-sm font-semibold">{siteConfig.name}</span>
            </div>
            <p className="text-xs leading-relaxed text-text-secondary">
              Tennis scoring reimagined
              <br />
              for Apple Watch.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-3 text-[10px] font-medium tracking-[2px] text-gold">
              PRODUCT
            </h4>
            <div className="flex flex-col gap-2 text-xs text-text-secondary">
              <Link href="/features" className="hover:text-white">
                Features
              </Link>
              <Link href="/pricing" className="hover:text-white">
                Pricing
              </Link>
              <a href={siteConfig.appStoreUrl} className="hover:text-white">
                Download
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-[10px] font-medium tracking-[2px] text-gold">
              LEGAL
            </h4>
            <div className="flex flex-col gap-2 text-xs text-text-secondary">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex items-center justify-between border-t border-white/8 pt-6">
          <p className="text-[10px] text-text-tertiary">
            © {siteConfig.copyright}. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a
              href="mailto:support@crowncourt.app"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/8 text-xs transition-colors hover:bg-white/15"
              aria-label="Email"
            >
              ✉
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
