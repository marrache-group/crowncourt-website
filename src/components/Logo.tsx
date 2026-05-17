import Image from 'next/image'
import logoSrc from '../../public/images/logo.png'

export function Logomark({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={className} {...props}>
      <Image src={logoSrc} alt="CrownCourt" className="h-full w-auto" />
    </div>
  )
}

export function Logo({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={className} {...props}>
      <Image src={logoSrc} alt="CrownCourt" className="h-full w-auto" />
    </div>
  )
}
