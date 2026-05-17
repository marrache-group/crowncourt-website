import { useId } from 'react'

import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD700" />
            <stop offset="1" stopColor="#FFD700" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD700" />
            <stop offset="1" stopColor="#FFD700" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function AppleWatchLogo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 80 24" aria-hidden="true" {...props}>
      <text
        x="0"
        y="18"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="13"
        fontWeight="500"
        fill="currentColor"
      >
        Apple Watch
      </text>
    </svg>
  )
}

function AppStoreLogo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 64 24" aria-hidden="true" {...props}>
      <text
        x="0"
        y="18"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="13"
        fontWeight="500"
        fill="currentColor"
      >
        App Store
      </text>
    </svg>
  )
}

function ATPLogo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 56 24" aria-hidden="true" {...props}>
      <text
        x="0"
        y="18"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="13"
        fontWeight="500"
        fill="currentColor"
      >
        ATP Tour
      </text>
    </svg>
  )
}

function UTRLogo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 72 24" aria-hidden="true" {...props}>
      <text
        x="0"
        y="18"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="13"
        fontWeight="500"
        fill="currentColor"
      >
        UTR Sport
      </text>
    </svg>
  )
}

function HealthKitLogo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 76 24" aria-hidden="true" {...props}>
      <text
        x="0"
        y="18"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="13"
        fontWeight="500"
        fill="currentColor"
      >
        Apple Health
      </text>
    </svg>
  )
}

function AppPlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#1A1F3A]">
      <p className="text-xs text-gray-500">Screenshot coming soon</p>
    </div>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">
              CrownCourt
            </p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-white">
              Score tennis.
              <br />
              From your wrist.
            </h1>
            <p className="mt-6 text-lg text-white/70">
              No friction score tracking from your wrist. The ultimate tennis
              companion for Apple Watch.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <AppStoreLink />
              <Button href="/#features" variant="outline">
                View Features
              </Button>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-white/20 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] mask-[linear-gradient(to_bottom,white_60%,transparent)] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppPlaceholder />
              </PhoneFrame>
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-white/60 lg:text-left">
              Built for
            </p>
            <ul
              role="list"
              className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {[
                ['Apple Watch', AppleWatchLogo],
                ['App Store', AppStoreLogo],
                ['ATP Tour', ATPLogo],
                ['UTR Sport', UTRLogo],
                ['Apple Health', HealthKitLogo],
              ].map(([name, LogoComponent]) => {
                const Comp = LogoComponent as React.ComponentType<
                  React.ComponentPropsWithoutRef<'svg'>
                >
                return (
                  <li key={name as string} className="flex items-center">
                    <Comp className="h-8 text-white/30" aria-label={name as string} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
