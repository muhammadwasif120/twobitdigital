import Nav          from '@/components/Nav'
import Hero         from '@/components/Hero'
import TrustStrip   from '@/components/TrustStrip'
import PartnerStrip from '@/components/PartnerStrip'
import Ticker       from '@/components/Ticker'
import About      from '@/components/About'
import Services   from '@/components/Services'
import Government from '@/components/Government'
import Portfolio  from '@/components/Portfolio'
import Process    from '@/components/Process'
import Contact    from '@/components/Contact'
import Footer     from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <PartnerStrip />
        <Ticker />
        <About />
        <Services />
        <Government />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
