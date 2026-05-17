import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const plans = [
  {
    name: 'Free',
    featured: false,
    price: '$0',
    duration: 'forever',
    description: 'Full match scoring with Digital Crown. Free forever.',
    button: {
      label: 'Get Started',
      href: '#',
    },
    features: [
      'Full match scoring',
      'Digital Crown input',
      'Always-On Display',
      'Undo support',
    ],
    excluded: ['Match history', 'Cloud sync'],
  },
  {
    name: '👑 Noble',
    featured: true,
    price: '$4.99',
    duration: 'one-time purchase',
    description: 'Unlock match history, cloud sync, and player profiles.',
    button: {
      label: 'Upgrade to Noble',
      href: '#',
    },
    features: [
      'Everything in Free',
      'Full match history',
      'Cloud sync',
      'Player profiles',
      'Statistics & trends',
      'Priority support',
    ],
    excluded: [],
  },
]

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9l6 6M15 9l-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  duration,
  description,
  button,
  features,
  excluded,
  featured = false,
}: {
  name: string
  price: string
  duration: string
  description: string
  button: { label: string; href: string }
  features: Array<string>
  excluded: Array<string>
  featured?: boolean
}) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-black/20',
        featured
          ? 'border border-gold/30 bg-navy'
          : 'border border-white/10 bg-white/5',
      )}
    >
      <h3
        className={clsx(
          'text-sm font-semibold',
          featured ? 'text-gold' : 'text-white',
        )}
      >
        {name}
      </h3>
      <p
        className={clsx('relative mt-5 text-3xl tracking-tight', 'text-white')}
      >
        {price}
      </p>
      <p
        className={clsx(
          'mt-1 text-sm',
          featured ? 'text-gold/70' : 'text-white/50',
        )}
      >
        {duration}
      </p>
      <p className={clsx('mt-3 text-sm', 'text-white/70')}>{description}</p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className="−my-2 divide-y divide-white/10 text-sm text-white/70"
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon className="h-6 w-6 flex-none text-gold" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
          {excluded.map((feature) => (
            <li key={feature} className="flex py-2 opacity-40">
              <XIcon className="h-6 w-6 flex-none text-white/40" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href={button.href}
        color={featured ? 'gold' : 'gray'}
        className="mt-6"
        aria-label={`Get started with the ${name} plan`}
      >
        {button.label}
      </Button>
    </section>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-white/10 bg-navy-light/50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-white"
          >
            Choose your game.
          </h2>
          <p className="mt-2 text-lg text-white/70">
            CrownCourt is free to use. Upgrade to Noble to unlock your full
            match history and cloud sync.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-3xl lg:grid-cols-2">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}
