import Balancer from 'react-wrap-balancer'

export default function Home() {
  return (
    <div className="content-wrapper">
      <div className="content">
        <Balancer as="p" className="mb-6">
          Hi 👋 I&apos;m Maxim (meaning &quot;the greatest&quot; in English), a
          software engineer and minimalist based in Kaliningrad, Russia.
        </Balancer>

        <Balancer as="p" className="mb-6">
          I develop things as a Frontend Software Engineer at KODE.
        </Balancer>
      </div>
    </div>
  )
}
