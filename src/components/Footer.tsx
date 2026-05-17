import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import logoSrc from '../../public/images/logo.png'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-start lg:py-16">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={logoSrc}
                alt="CrownCourt"
                className="h-6 w-auto flex-none"
              />
              <p className="text-xs font-semibold text-gold uppercase">
                CrownCourt
              </p>
            </div>
            <div>
              <p className="mt-2 text-xs text-white/60">
                Tennis scoring.
                <br />
                Reimagined for Apple Watch.
              </p>
            </div>
          </div>

          <div className="flex gap-16 sm:gap-24">
            <div>
              <p className="text-xs font-semibold tracking-widest text-gold uppercase">
                Product
              </p>
              <ul className="mt-4 space-y-3 text-xs text-white/60">
                <li>
                  <Link href="/#features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Download
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-gold uppercase">
                Legal
              </p>
              <ul className="mt-4 space-y-3 text-xs text-white/60">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-gold uppercase">
                Support
              </p>
              <ul className="mt-4 space-y-3 text-xs text-white/60">
                <li>
                  <a
                    href="mailto:support@marrachegroup.com"
                    className="text-xs text-white/40 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 pb-12 md:pt-6">
          <p className="text-xs text-white/40">
            &copy;{' '}
            {new Date().getFullYear() > 2026
              ? `2026–${new Date().getFullYear()}`
              : '2026'}{' '}
            CrownCourt App - Designed and developed by The Marrache Group. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
