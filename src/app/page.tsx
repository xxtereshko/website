import Balancer from 'react-wrap-balancer'

import { ThemeToggle } from '@entities/theme'

export default function Home() {
  return (
    <div className="content-wrapper">
      <div className="content">
        <Balancer as="p" className="mb-6">
          Hi 👋 I&apos;m Maxim, a software engineer and minimalist based in
          Kaliningrad, Russia.
        </Balancer>

        <Balancer as="p" className="mb-6">
          I develop things as a Frontend Software Engineer at KODE.
        </Balancer>

        <ThemeToggle />
      </div>
    </div>
  )
}
