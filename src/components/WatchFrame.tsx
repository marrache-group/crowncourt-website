import clsx from 'clsx'

// ViewBox: 284 × 340
// Case: x=22 y=20 w=240 h=300 rx=66 (squircle, Apple Watch proportions ~38:45)
// Screen: x=36 y=34 w=212 h=272 rx=54 (14px inset on all sides)
// Crown: x=260 y=104 w=14 h=48 rx=7
function WatchFrameSvg(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 284 340" aria-hidden="true" {...props}>
      {/* Case body with screen cutout (evenodd creates the transparent screen hole) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M88 20L196 20Q262 20 262 86L262 254Q262 320 196 320L88 320Q22 320 22 254L22 86Q22 20 88 20ZM90 34L194 34Q248 34 248 88L248 252Q248 306 194 306L90 306Q36 306 36 252L36 88Q36 34 90 34Z"
      />
      {/* Digital Crown */}
      <rect x="260" y="104" width="14" height="48" rx="7" />
    </svg>
  )
}

export function WatchFrame({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('relative aspect-[284/340]', className)} {...props}>
      {/* Shadow layer behind the case */}
      <div className="absolute inset-y-[calc(20/340*100%)] right-[calc(22/284*100%)] left-[calc(22/284*100%)] rounded-[calc(66/284*100%)/calc(66/340*100%)] shadow-2xl" />
      {/* Screen content area */}
      <div className="absolute top-[calc(34/340*100%)] left-[calc(36/284*100%)] grid h-[calc(272/340*100%)] w-[calc(212/284*100%)] transform grid-cols-1 overflow-hidden rounded-[calc(54/284*100%)/calc(54/340*100%)] bg-gray-900">
        {children}
      </div>
      <WatchFrameSvg className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100" />
    </div>
  )
}
