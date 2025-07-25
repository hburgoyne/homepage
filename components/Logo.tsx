import Image from 'next/image'

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Hayden Burgoyne Logo"
      width={60}
      height={60}
      className={className}
    />
  )
}
