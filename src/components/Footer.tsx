import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import logoSrc from '../../public/images/logo.png'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-start lg:py-16">
          <div>
            <div className="flex items-center gap-4 text-gray-900">
              <Image
                src={logoSrc}
                alt="CrownCourt"
                className="h-10 w-auto flex-none"
              />
              <div>
                <p className="text-base font-semibold">CrownCourt</p>
                <p className="mt-1 text-sm text-gray-600">
                  Tennis scoring reimagined
                  <br />
                  for Apple Watch.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-16 sm:gap-24">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#FFD700] uppercase">
                Product
              </p>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>
                  <Link href="/#features" className="hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Download
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-[#FFD700] uppercase">
                Legal
              </p>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>
                  <Link href="/privacy" className="hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-gray-900">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 pb-12 md:flex-row md:pt-6">
          <p className="text-sm text-gray-500">
            &copy; 2026 Marrache Group. All rights reserved.
          </p>
          <a
            href="mailto:support@marrachegroup.com"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            support@marrachegroup.com
          </a>
        </div>
      </Container>
    </footer>
  )
}
